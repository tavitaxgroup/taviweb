import { Pool } from 'pg';

let pool: Pool | null = null;

const DEFAULT_PG_CONN =
  'postgresql://postgres.afykilitmywbbgvwcsby:Tavitax%40123@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres';

export function getPool(): Pool {
  if (!pool) {
    const conn = process.env.DIRECT_URL || process.env.DATABASE_URL || DEFAULT_PG_CONN;
    pool = new Pool({
      connectionString: conn,
      ssl: { rejectUnauthorized: false },
      max: 10,
    });
  }
  return pool;
}

function ident(name: string): string {
  if (!/^[a-zA-Z0-9_]+$/.test(name)) {
    throw new Error(`Invalid SQL identifier: ${name}`);
  }
  return `"${name}"`;
}

type RelationSpec = {
  alias: string;
  targetTable: string;
  fkColumn: string;
  targetColumn: string;
  isArray?: boolean;
  isCount?: boolean;
  nestedCourse?: boolean;
  nestedLessons?: boolean;
};

const PG_TEXT_ARRAY_COLUMNS = new Set(['features', 'benefits']);

function parseSelect(table: string, selectRaw: string): { columnsSql: string; relations: RelationSpec[] } {
  const relations: RelationSpec[] = [];
  if (!selectRaw || selectRaw.trim() === '*') {
    return { columnsSql: '*', relations };
  }

  // Split top-level comma-separated tokens (respecting parentheses)
  const tokens: string[] = [];
  let depth = 0;
  let current = '';
  for (const ch of selectRaw) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ',' && depth === 0) {
      if (current.trim()) tokens.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) tokens.push(current.trim());

  const cols: string[] = [];
  for (const tok of tokens) {
    if (tok === '*') {
      cols.push('*');
      continue;
    }
    // Check relation pattern: alias:target(inner) or target (inner) across multiple lines
    const relMatch = tok.match(/^(?:([a-zA-Z0-9_]+)\s*:\s*)?([a-zA-Z0-9_]+)\s*\(([\s\S]+)\)$/);
    if (relMatch) {
      const alias = relMatch[1] || relMatch[2];
      const targetOrFk = relMatch[2];
      const inner = relMatch[3].trim();

      if (targetOrFk === 'tenants' || targetOrFk === 'tenant_id') {
        relations.push({ alias, targetTable: 'tenants', fkColumn: 'tenant_id', targetColumn: 'id' });
      } else if (targetOrFk === 'crm_roles') {
        relations.push({ alias, targetTable: 'crm_roles', fkColumn: 'role_id', targetColumn: 'id' });
      } else if (targetOrFk === 'crm_contacts' || targetOrFk === 'contact_id') {
        relations.push({ alias, targetTable: 'crm_contacts', fkColumn: 'contact_id', targetColumn: 'id' });
      } else if (targetOrFk === 'crm_users' || targetOrFk === 'user_id' || targetOrFk === 'assignee_id') {
        const fkCol =
          table === 'crm_deals' || alias === 'assignee' || targetOrFk === 'assignee_id'
            ? 'assignee_id'
            : 'user_id';
        relations.push({ alias, targetTable: 'crm_users', fkColumn: fkCol, targetColumn: 'id' });
      } else if (targetOrFk === 'teacher_id') {
        relations.push({ alias, targetTable: 'crm_users', fkColumn: 'teacher_id', targetColumn: 'id' });
      } else if (targetOrFk === 'course_id' || targetOrFk === 'crm_courses') {
        relations.push({ alias, targetTable: 'crm_courses', fkColumn: 'course_id', targetColumn: 'id' });
      } else if (targetOrFk === 'courses') {
        relations.push({ alias, targetTable: 'courses', fkColumn: 'course_id', targetColumn: 'id' });
      } else if (targetOrFk === 'class_id') {
        relations.push({
          alias,
          targetTable: 'crm_classes',
          fkColumn: 'class_id',
          targetColumn: 'id',
          nestedCourse: inner.includes('course_id'),
        });
      } else if (targetOrFk === 'crm_classes' && inner === 'count') {
        relations.push({
          alias,
          targetTable: 'crm_classes',
          fkColumn: 'id',
          targetColumn: 'course_id',
          isCount: true,
        });
      } else if (targetOrFk === 'crm_enrollments' && inner === 'count') {
        relations.push({
          alias,
          targetTable: 'crm_enrollments',
          fkColumn: 'id',
          targetColumn: 'class_id',
          isCount: true,
        });
      } else if (targetOrFk === 'enrollments' && inner === 'count') {
        relations.push({
          alias,
          targetTable: 'enrollments',
          fkColumn: 'id',
          targetColumn: 'course_id',
          isCount: true,
        });
      } else if (targetOrFk === 'modules') {
        relations.push({
          alias,
          targetTable: 'modules',
          fkColumn: 'id',
          targetColumn: 'course_id',
          isArray: true,
          nestedLessons: inner.includes('lessons'),
        });
      } else if (targetOrFk === 'lessons') {
        relations.push({
          alias: 'lessons',
          targetTable: 'lessons',
          fkColumn: 'id',
          targetColumn: 'module_id',
          isArray: true,
        });
      }
      continue;
    }

    if (/^[a-zA-Z0-9_]+$/.test(tok)) {
      cols.push(ident(tok));
    }
  }

  // If relations exist, ensure we select * so FK columns are available for hydration
  const columnsSql = relations.length > 0 || cols.includes('*') || cols.length === 0 ? '*' : cols.join(', ');
  return { columnsSql, relations };
}

function buildWhereClause(searchParams: URLSearchParams, values: any[]): string {
  const clauses: string[] = [];
  const reserved = new Set(['select', 'order', 'limit', 'offset', 'on_conflict', 'columns']);

  for (const [rawKey, rawVal] of searchParams.entries()) {
    if (reserved.has(rawKey)) continue;

    if (rawKey === 'or') {
      // Example: or=(name.ilike.%abc%,phone.ilike.%abc%)
      const inner = rawVal.replace(/^\(/, '').replace(/\)$/, '');
      const parts = inner.split(',');
      const orClauses: string[] = [];
      for (const p of parts) {
        const m = p.match(/^([a-zA-Z0-9_]+)\.(eq|neq|ilike|like|gt|gte|lt|lte|is)\.(.+)$/);
        if (m) {
          const [, col, op, v] = m;
          const c = ident(col);
          if (op === 'ilike') {
            values.push(v.replace(/\*/g, '%'));
            orClauses.push(`${c} ILIKE $${values.length}`);
          } else if (op === 'like') {
            values.push(v.replace(/\*/g, '%'));
            orClauses.push(`${c} LIKE $${values.length}`);
          } else if (op === 'eq') {
            values.push(v);
            orClauses.push(`${c} = $${values.length}`);
          } else if (op === 'is') {
            if (v === 'null') orClauses.push(`${c} IS NULL`);
          }
        }
      }
      if (orClauses.length > 0) {
        clauses.push(`(${orClauses.join(' OR ')})`);
      }
      continue;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(rawKey)) continue;
    const col = ident(rawKey);

    if (rawVal.startsWith('eq.')) {
      values.push(rawVal.slice(3));
      clauses.push(`${col} = $${values.length}`);
    } else if (rawVal.startsWith('neq.')) {
      values.push(rawVal.slice(4));
      clauses.push(`${col} != $${values.length}`);
    } else if (rawVal.startsWith('gt.')) {
      values.push(rawVal.slice(3));
      clauses.push(`${col} > $${values.length}`);
    } else if (rawVal.startsWith('gte.')) {
      values.push(rawVal.slice(4));
      clauses.push(`${col} >= $${values.length}`);
    } else if (rawVal.startsWith('lt.')) {
      values.push(rawVal.slice(3));
      clauses.push(`${col} < $${values.length}`);
    } else if (rawVal.startsWith('lte.')) {
      values.push(rawVal.slice(4));
      clauses.push(`${col} <= $${values.length}`);
    } else if (rawVal.startsWith('ilike.')) {
      values.push(rawVal.slice(6).replace(/\*/g, '%'));
      clauses.push(`${col} ILIKE $${values.length}`);
    } else if (rawVal.startsWith('like.')) {
      values.push(rawVal.slice(5).replace(/\*/g, '%'));
      clauses.push(`${col} LIKE $${values.length}`);
    } else if (rawVal.startsWith('is.')) {
      const target = rawVal.slice(3).toLowerCase();
      if (target === 'null') clauses.push(`${col} IS NULL`);
      else if (target === 'true') clauses.push(`${col} IS TRUE`);
      else if (target === 'false') clauses.push(`${col} IS FALSE`);
    } else if (rawVal.startsWith('not.is.')) {
      const target = rawVal.slice(7).toLowerCase();
      if (target === 'null') clauses.push(`${col} IS NOT NULL`);
    } else if (rawVal.startsWith('in.(') && rawVal.endsWith(')')) {
      const inner = rawVal.slice(4, -1);
      const items = inner
        .split(',')
        .map(s => s.trim().replace(/^"(.*)"$/, '$1'))
        .filter(Boolean);
      if (items.length === 0) {
        clauses.push('1 = 0');
      } else {
        const placeholders = items.map(item => {
          values.push(item);
          return `$${values.length}`;
        });
        clauses.push(`${col} IN (${placeholders.join(', ')})`);
      }
    }
  }

  return clauses.length > 0 ? `WHERE ${clauses.join(' AND ')}` : '';
}

function buildOrderClause(searchParams: URLSearchParams): string {
  const orderRaw = searchParams.get('order');
  if (!orderRaw) return '';
  const parts = orderRaw.split(',');
  const sqlParts: string[] = [];
  for (const part of parts) {
    const tokens = part.trim().split('.');
    const col = tokens[0];
    if (!/^[a-zA-Z0-9_]+$/.test(col)) continue;
    const dir = tokens[1]?.toLowerCase() === 'desc' ? 'DESC' : 'ASC';
    const nulls =
      tokens[2]?.toLowerCase() === 'nullsfirst'
        ? ' NULLS FIRST'
        : tokens[2]?.toLowerCase() === 'nullslast'
        ? ' NULLS LAST'
        : '';
    sqlParts.push(`${ident(col)} ${dir}${nulls}`);
  }
  return sqlParts.length > 0 ? `ORDER BY ${sqlParts.join(', ')}` : '';
}

async function hydrateRelations(db: Pool, rows: any[], relations: RelationSpec[]) {
  if (rows.length === 0 || relations.length === 0) return rows;

  for (const rel of relations) {
    if (rel.isCount) {
      const parentIds = Array.from(new Set(rows.map(r => r[rel.fkColumn]).filter(Boolean)));
      if (parentIds.length === 0) continue;
      const placeholders = parentIds.map((_, i) => `$${i + 1}`).join(', ');
      const q = `SELECT ${ident(rel.targetColumn)} AS pid, COUNT(*)::int AS cnt FROM public.${ident(
        rel.targetTable
      )} WHERE ${ident(rel.targetColumn)} IN (${placeholders}) GROUP BY ${ident(rel.targetColumn)}`;
      const res = await db.query(q, parentIds);
      const countMap = new Map(res.rows.map(r => [String(r.pid), r.cnt]));
      for (const row of rows) {
        row[rel.alias] = [{ count: countMap.get(String(row[rel.fkColumn])) || 0 }];
      }
    } else if (rel.isArray) {
      const parentIds = Array.from(new Set(rows.map(r => r[rel.fkColumn]).filter(Boolean)));
      if (parentIds.length === 0) continue;
      const placeholders = parentIds.map((_, i) => `$${i + 1}`).join(', ');
      const q = `SELECT * FROM public.${ident(rel.targetTable)} WHERE ${ident(
        rel.targetColumn
      )} IN (${placeholders})`;
      const res = await db.query(q, parentIds);
      const childRows = res.rows;

      if (rel.nestedLessons && childRows.length > 0) {
        await hydrateRelations(db, childRows, [
          { alias: 'lessons', targetTable: 'lessons', fkColumn: 'id', targetColumn: 'module_id', isArray: true },
        ]);
      }

      const groupMap = new Map<string, any[]>();
      for (const child of childRows) {
        const key = String(child[rel.targetColumn]);
        if (!groupMap.has(key)) groupMap.set(key, []);
        groupMap.get(key)!.push(child);
      }
      for (const row of rows) {
        row[rel.alias] = groupMap.get(String(row[rel.fkColumn])) || [];
      }
    } else {
      const fkValues = Array.from(new Set(rows.map(r => r[rel.fkColumn]).filter(Boolean)));
      if (fkValues.length === 0) {
        for (const row of rows) row[rel.alias] = null;
        continue;
      }
      const placeholders = fkValues.map((_, i) => `$${i + 1}`).join(', ');
      const q = `SELECT * FROM public.${ident(rel.targetTable)} WHERE ${ident(
        rel.targetColumn
      )} IN (${placeholders})`;
      const res = await db.query(q, fkValues);
      const targetRows = res.rows;

      if (rel.nestedCourse && targetRows.length > 0) {
        await hydrateRelations(db, targetRows, [
          { alias: 'course', targetTable: 'crm_courses', fkColumn: 'course_id', targetColumn: 'id' },
        ]);
      }

      const map = new Map(targetRows.map(r => [String(r[rel.targetColumn]), r]));
      for (const row of rows) {
        const fkVal = row[rel.fkColumn];
        row[rel.alias] = fkVal ? map.get(String(fkVal)) || null : null;
      }
    }
  }

  return rows;
}

export async function executePostgrestRequest(
  method: string,
  pathAfterRestV1: string,
  searchParams: URLSearchParams,
  headers: Headers,
  bodyText?: string | null
): Promise<{ status: number; headers: Record<string, string>; body: string }> {
  const db = getPool();
  const cleanPath = pathAfterRestV1.replace(/^\/+/, '');
  const accept = headers.get('accept') || '';
  const prefer = headers.get('prefer') || '';
  const rangeHeader = headers.get('range') || '';
  const isSingle = accept.includes('application/vnd.pgrst.object+json');
  const wantsCount = prefer.includes('count=exact');
  const wantsRep = prefer.includes('return=representation');

  try {
    // 1. Handle RPC calls: /rest/v1/rpc/<fnName>
    if (cleanPath.startsWith('rpc/')) {
      const fnName = cleanPath.slice(4);
      const payload = bodyText ? JSON.parse(bodyText) : {};
      if (fnName === 'increment_ai_used') {
        await db.query('SELECT public.increment_ai_used($1, $2)', [payload.tenant_id, payload.amount]);
        return { status: 200, headers: { 'Content-Type': 'application/json' }, body: 'null' };
      }
      if (fnName === 'hybrid_search_knowledge' || fnName === 'match_knowledge_chunks') {
        const vecStr = Array.isArray(payload.query_embedding)
          ? `[${payload.query_embedding.join(',')}]`
          : payload.query_embedding;
        const res = await db.query(
          'SELECT * FROM public.hybrid_search_knowledge($1, $2::vector, $3, $4)',
          [
            payload.query_text || '',
            vecStr,
            payload.match_count || 5,
            payload.p_tenant_id || payload.filter_tenant_id,
          ]
        );
        return {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(res.rows),
        };
      }
      return { status: 200, headers: { 'Content-Type': 'application/json' }, body: '[]' };
    }

    const table = cleanPath.split('/')[0];
    const tableSql = `public.${ident(table)}`;

    // 2. GET / HEAD (SELECT)
    if (method === 'GET' || method === 'HEAD') {
      const values: any[] = [];
      const whereSql = buildWhereClause(searchParams, values);
      const orderSql = buildOrderClause(searchParams);
      const { columnsSql, relations } = parseSelect(table, searchParams.get('select') || '*');

      let totalCount: number | null = null;
      if (wantsCount || method === 'HEAD') {
        const countRes = await db.query(`SELECT COUNT(*)::int AS cnt FROM ${tableSql} ${whereSql}`, values);
        totalCount = countRes.rows[0]?.cnt ?? 0;
        if (method === 'HEAD') {
          return {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Content-Range': `*/${totalCount}`,
            },
            body: '',
          };
        }
      }

      let limitSql = '';
      let offsetSql = '';
      const limitParam = searchParams.get('limit');
      const offsetParam = searchParams.get('offset');

      if (rangeHeader && rangeHeader.includes('-')) {
        const m = rangeHeader.match(/(\d+)-(\d+)/);
        if (m) {
          const from = parseInt(m[1], 10);
          const to = parseInt(m[2], 10);
          offsetSql = `OFFSET ${from}`;
          limitSql = `LIMIT ${Math.max(1, to - from + 1)}`;
        }
      } else {
        if (limitParam) limitSql = `LIMIT ${parseInt(limitParam, 10)}`;
        if (offsetParam) offsetSql = `OFFSET ${parseInt(offsetParam, 10)}`;
      }

      const sql = `SELECT ${columnsSql} FROM ${tableSql} ${whereSql} ${orderSql} ${limitSql} ${offsetSql}`;
      const res = await db.query(sql, values);
      const hydrated = await hydrateRelations(db, res.rows, relations);

      const resHeaders: Record<string, string> = { 'Content-Type': 'application/json' };
      if (totalCount !== null) {
        const endIdx = Math.max(0, hydrated.length - 1);
        resHeaders['Content-Range'] = hydrated.length > 0 ? `0-${endIdx}/${totalCount}` : `*/${totalCount}`;
      }

      if (isSingle) {
        if (hydrated.length === 0) {
          return {
            status: 406,
            headers: resHeaders,
            body: JSON.stringify({
              code: 'PGRST116',
              details: 'The result contains 0 rows',
              hint: null,
              message: 'JSON object requested, multiple (or no) rows returned',
            }),
          };
        }
        return { status: 200, headers: resHeaders, body: JSON.stringify(hydrated[0]) };
      }

      return { status: 200, headers: resHeaders, body: JSON.stringify(hydrated) };
    }

    // 3. POST (INSERT / UPSERT)
    if (method === 'POST') {
      const payload = bodyText ? JSON.parse(bodyText) : {};
      const records = Array.isArray(payload) ? payload : [payload];
      if (records.length === 0) {
        return { status: 201, headers: { 'Content-Type': 'application/json' }, body: '[]' };
      }

      const cols = Object.keys(records[0]).filter(k => records[0][k] !== undefined);
      const colNamesSql = cols.map(ident).join(', ');
      const values: any[] = [];
      const rowPlaceholders: string[] = [];

      for (const rec of records) {
        const ph: string[] = [];
        for (const c of cols) {
          const v = rec[c];
          if (c === 'embedding' && Array.isArray(v)) {
            values.push(`[${v.join(',')}]`);
          } else if (PG_TEXT_ARRAY_COLUMNS.has(c) && Array.isArray(v)) {
            values.push(v);
          } else if (v !== null && typeof v === 'object' && !(v instanceof Date)) {
            values.push(JSON.stringify(v));
          } else {
            values.push(v ?? null);
          }
          ph.push(`$${values.length}`);
        }
        rowPlaceholders.push(`(${ph.join(', ')})`);
      }

      let conflictSql = '';
      const onConflict = searchParams.get('on_conflict');
      const isUpsert = prefer.includes('resolution=merge-duplicates') || Boolean(onConflict);
      if (isUpsert) {
        const conflictCols = onConflict
          ? onConflict
              .split(',')
              .map(c => ident(c.trim()))
              .join(', ')
          : '"id"';
        if (prefer.includes('resolution=ignore-duplicates')) {
          conflictSql = `ON CONFLICT (${conflictCols}) DO NOTHING`;
        } else {
          const updateCols = cols.filter(c => c !== 'id');
          if (updateCols.length > 0) {
            const setPairs = updateCols.map(c => `${ident(c)} = EXCLUDED.${ident(c)}`).join(', ');
            conflictSql = `ON CONFLICT (${conflictCols}) DO UPDATE SET ${setPairs}`;
          } else {
            conflictSql = `ON CONFLICT (${conflictCols}) DO NOTHING`;
          }
        }
      }

      const sql = `INSERT INTO ${tableSql} (${colNamesSql}) VALUES ${rowPlaceholders.join(
        ', '
      )} ${conflictSql} RETURNING *`;
      const res = await db.query(sql, values);
      const { relations } = parseSelect(table, searchParams.get('select') || '*');
      const hydrated = await hydrateRelations(db, res.rows, relations);
      const out = isSingle ? hydrated[0] ?? null : hydrated;
      return {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(out),
      };
    }

    // 4. PATCH (UPDATE)
    if (method === 'PATCH') {
      const payload = bodyText ? JSON.parse(bodyText) : {};
      const cols = Object.keys(payload).filter(k => payload[k] !== undefined);
      if (cols.length === 0) {
        return { status: 200, headers: { 'Content-Type': 'application/json' }, body: '[]' };
      }

      const values: any[] = [];
      const setClauses: string[] = [];
      for (const c of cols) {
        const v = payload[c];
        if (c === 'embedding' && Array.isArray(v)) {
          values.push(`[${v.join(',')}]`);
        } else if (PG_TEXT_ARRAY_COLUMNS.has(c) && Array.isArray(v)) {
          values.push(v);
        } else if (v !== null && typeof v === 'object' && !(v instanceof Date)) {
          values.push(JSON.stringify(v));
        } else {
          values.push(v ?? null);
        }
        setClauses.push(`${ident(c)} = $${values.length}`);
      }

      const whereSql = buildWhereClause(searchParams, values);
      const sql = `UPDATE ${tableSql} SET ${setClauses.join(', ')} ${whereSql} RETURNING *`;
      const res = await db.query(sql, values);
      const { relations } = parseSelect(table, searchParams.get('select') || '*');
      const hydrated = await hydrateRelations(db, res.rows, relations);
      const out = isSingle ? hydrated[0] ?? null : wantsRep ? hydrated : hydrated;
      return {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(out),
      };
    }

    // 5. DELETE
    if (method === 'DELETE') {
      const values: any[] = [];
      const whereSql = buildWhereClause(searchParams, values);
      const sql = `DELETE FROM ${tableSql} ${whereSql} RETURNING *`;
      const res = await db.query(sql, values);
      const out = isSingle ? res.rows[0] ?? null : res.rows;
      return {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(out),
      };
    }

    return {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: `Method ${method} not supported` }),
    };
  } catch (err: any) {
    console.error(`[pgRestEngine Error] ${method} /rest/v1/${cleanPath}:`, err);
    return {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: err?.message || 'Database query error',
        code: err?.code || 'P0001',
        details: err?.detail || null,
        hint: err?.hint || null,
      }),
    };
  }
}

if (typeof globalThis !== 'undefined') {
  (globalThis as any).__pgRestExecute = executePostgrestRequest;
}


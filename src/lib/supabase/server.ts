import type { BusinessLead } from "@/types/demo";
import { Pool } from "pg";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const BUSINESSES_TABLE = process.env.SUPABASE_BUSINESSES_TABLE ?? process.env.SUPABASE_LEADS_TABLE ?? "leads";
const DATABASE_URL = process.env.DATABASE_URL;

let pgPool: Pool | null = null;
function getPgPool(): Pool | null {
  if (!pgPool && DATABASE_URL) {
    pgPool = new Pool({
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });
  }
  return pgPool;
}

export function hasSupabaseConfig() {
  return Boolean(DATABASE_URL || (SUPABASE_URL && SUPABASE_KEY));
}

export async function getBusinessByPlaceId(placeId: string): Promise<BusinessLead | null> {
  const pool = getPgPool();
  if (pool) {
    try {
      const res = await pool.query(
        `SELECT * FROM ${BUSINESSES_TABLE} WHERE place_id = $1 LIMIT 1`,
        [placeId]
      );
      if (res.rows.length > 0) {
        const row = res.rows[0];
        return {
          id: String(row.id),
          place_id: row.place_id,
          industry: row.industry,
          name: row.name,
          formatted_address: row.formatted_address || row.address,
          formatted_phone_number: row.formatted_phone_number || row.phone,
          website: row.website,
          image_url: row.image_url || row.logo_url,
          rating: row.rating ? Number(row.rating) : 4.9,
          user_ratings_total: row.user_ratings_total ? Number(row.user_ratings_total) : 185,
          facebook_url: row.facebook_url,
          facebook_followers: row.facebook_followers,
          facebook_email: row.email,
          created_at: row.created_at ? String(row.created_at) : null,
          updated_at: row.updated_at ? String(row.updated_at) : null,
          demo_url: row.demo_url,
          demo_status: row.demo_status,
          outreach_status: row.outreach_status,
          notes: row.notes,
          template_data: row.template_data
        };
      }
    } catch (err) {
      console.error(`PostgreSQL fetch error for place_id=${placeId}:`, err);
    }
  }

  if (!hasSupabaseConfig() || !SUPABASE_URL || !SUPABASE_KEY) return null;

  try {
    const url = new URL(`${SUPABASE_URL}/rest/v1/${BUSINESSES_TABLE}`);
    url.searchParams.set("place_id", `eq.${placeId}`);
    url.searchParams.set("select", "*");
    url.searchParams.set("limit", "1");

    const response = await fetch(url.toString(), {
      headers: {
        apikey: SUPABASE_KEY!,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Accept: "application/json"
      },
      cache: "no-store"
    });

    if (!response.ok) {
      console.error(`Supabase fetch failed for place_id=${placeId}: ${response.status} ${response.statusText}`);
      return null;
    }

    const rows = (await response.json()) as BusinessLead[];
    return rows[0] ?? null;
  } catch (error) {
    console.error(`Supabase fetch error for place_id=${placeId}:`, error);
    return null;
  }
}


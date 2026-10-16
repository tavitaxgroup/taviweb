import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function checkUsers() {
  const { data, error } = await supabase.from('leads').select('count', { count: 'exact', head: true });
  console.log('leads table count:', data, error);

  const { data: d2, error: e2 } = await supabase.from('contacts').select('count', { count: 'exact', head: true });
  console.log('contacts table count:', d2, e2);
}

checkUsers();

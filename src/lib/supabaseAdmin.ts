// src/lib/supabaseAdmin.ts
// Admin client for Supabase (uses service role key). Not exposed to the browser.
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseAdmin = createClient(supabaseUrl, serviceKey);

// Supabase client setup
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || '';
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('placeholder') &&
  !supabaseAnonKey.includes('placeholder')
);

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
);

/**
 * Health check – runs a lightweight query to verify the connection.
 */
export async function checkSupabaseHealth(): Promise<boolean> {
  if (!isSupabaseConfigured) {
    console.warn('⚠️ Supabase environment variables not configured.');
    return false;
  }
  try {
    const { error } = await supabase
      .from('users')
      .select('id')
      .limit(1);

    if (error) {
      const msg = (error.message || '').toLowerCase();
      if (
        msg.includes('fetch') ||
        msg.includes('network') ||
        msg.includes('failed to fetch') ||
        msg.includes('enotfound')
      ) {
        console.warn('⚠️ Supabase health check connection error:', error.message);
        return false;
      }
      // Se for código PGRST ou retorno com status HTTP da API Supabase (mesmo se tabela vazia ou regra RLS ativa)
      console.log('✅ Supabase connection reached (status/notice):', error.message);
      return true;
    }
    console.log('✅ Supabase connection OK');
    return true;
  } catch (e) {
    console.error('❌ Supabase health check exception:', e);
    return false;
  }
}

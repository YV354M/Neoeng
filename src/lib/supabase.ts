import { createClient } from "@supabase/supabase-js";

/**
 * Returns the Supabase client, initializing it lazily on first call.
 *
 * WHY LAZY? During `npm run build`, Next.js collects static page data by
 * importing server modules. If we throw at module-load time (before the
 * env vars are available), the build fails. Deferring validation to the
 * first *request* solves this cleanly.
 */
export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url) throw new Error("Missing env var: NEXT_PUBLIC_SUPABASE_URL");
  if (!key) throw new Error("Missing env var: NEXT_PUBLIC_SUPABASE_ANON_KEY");

  return createClient(url, key);
}

import { createClient } from '@supabase/supabase-js'

const url  = process.env.SUPABASE_URL  ?? ''
const key  = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

export function getSupabaseAdmin() {
  if (!url || !key) return null
  return createClient(url, key)
}

export function getSupabasePublic() {
  if (!url || !anonKey) return null
  return createClient(url, anonKey)
}

export const isSupabaseConfigured = () => Boolean(url && key)

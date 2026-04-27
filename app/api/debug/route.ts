import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  const cookieStore = await cookies()
  const session = cookieStore.get('kgh_admin')
  const secret = process.env.ADMIN_SECRET ?? ''
  if (!secret || session?.value !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const url = process.env.SUPABASE_URL ?? ''
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''

  const info = {
    url_set: Boolean(url),
    url_prefix: url.slice(0, 30),
    key_set: Boolean(key),
    key_length: key.length,
    key_prefix: key.slice(0, 20),
    key_suffix: key.slice(-10),
  }

  const sb = getSupabaseAdmin()
  if (!sb) return NextResponse.json({ info, supabase: 'not configured' })

  const { data, error } = await sb.from('hotels').select('id').limit(1)
  return NextResponse.json({
    info,
    supabase_ok: !error,
    supabase_error: error?.message ?? null,
    row_count: data?.length ?? 0,
  })
}

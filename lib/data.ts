import { hotels as staticHotels, Hotel } from '@/data/hotels'
import { getSupabaseAdmin, isSupabaseConfigured } from './supabase'

export type { Hotel }

// ── Public read ───────────────────────────────────────────────
export async function getVisibleHotels(): Promise<Hotel[]> {
  if (isSupabaseConfigured()) {
    const sb = getSupabaseAdmin()!
    const { data, error } = await sb
      .from('hotels')
      .select('*')
      .eq('visible', true)
      .order('name')
    if (!error && data) return data as Hotel[]
  }
  return staticHotels.filter((h) => h.visible)
}

// ── Admin read ────────────────────────────────────────────────
export async function getAllHotels(): Promise<Hotel[]> {
  if (isSupabaseConfigured()) {
    const sb = getSupabaseAdmin()!
    const { data, error } = await sb
      .from('hotels')
      .select('*')
      .order('country')
      .order('city')
      .order('name')
    if (!error && data) return data as Hotel[]
  }
  return [...staticHotels].sort((a, b) =>
    a.country.localeCompare(b.country) || a.city.localeCompare(b.city) || a.name.localeCompare(b.name)
  )
}

// ── Admin write ───────────────────────────────────────────────
export async function updateHotel(
  id: string,
  updates: Partial<Pick<Hotel, 'website' | 'visible'>>
): Promise<{ ok: boolean; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: 'Supabase not configured.' }
  }
  const sb = getSupabaseAdmin()!
  const { error } = await sb.from('hotels').update(updates).eq('id', id)
  if (error) return { ok: false, error: error.message }
  return { ok: true }
}

export type NewHotel = Pick<
  Hotel,
  'name' | 'city' | 'country' | 'brand' | 'locationType' | 'website' | 'facebook' | 'status' | 'visible'
>

export async function createHotel(
  data: NewHotel
): Promise<{ ok: boolean; hotel?: Hotel; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: 'Supabase not configured.' }
  }
  const sb = getSupabaseAdmin()!
  const id = `hotel-${Date.now()}`
  const { data: created, error } = await sb
    .from('hotels')
    .insert({ id, ...data, location_type: data.locationType })
    .select()
    .single()
  if (error) return { ok: false, error: error.message }
  return { ok: true, hotel: created as Hotel }
}

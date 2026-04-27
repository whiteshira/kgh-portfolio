import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getAllHotels } from '@/lib/data'
import { isSupabaseConfigured } from '@/lib/supabase'
import AdminClient from '@/components/AdminClient'

export default async function AdminPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('kgh_admin')
  const secret = process.env.ADMIN_SECRET ?? ''

  if (!secret || session?.value !== secret) {
    redirect('/admin/login')
  }

  const hotels = await getAllHotels()
  const dbConfigured = isSupabaseConfigured()

  return <AdminClient hotels={hotels} dbConfigured={dbConfigured} />
}

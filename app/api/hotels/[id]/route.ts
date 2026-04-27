import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { updateHotel } from '@/lib/data'

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Auth check
  const cookieStore = await cookies()
  const session = cookieStore.get('kgh_admin')
  const secret = process.env.ADMIN_SECRET ?? ''
  if (!secret || session?.value !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await req.json()
  const updates: Record<string, unknown> = {}
  if (typeof body.website === 'string') updates.website = body.website
  if (typeof body.visible === 'boolean') updates.visible = body.visible

  const result = await updateHotel(id, updates)
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }

  revalidatePath('/')
  return NextResponse.json({ ok: true })
}

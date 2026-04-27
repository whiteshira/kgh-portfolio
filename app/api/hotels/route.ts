import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { createHotel, NewHotel } from '@/lib/data'

export async function POST(req: NextRequest) {
  const cookieStore = await cookies()
  const session = cookieStore.get('kgh_admin')
  const secret = process.env.ADMIN_SECRET ?? ''
  if (!secret || session?.value !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const required = ['name', 'city', 'country', 'brand', 'locationType', 'status']
  for (const field of required) {
    if (!body[field]) {
      return NextResponse.json({ error: `"${field}" is required` }, { status: 400 })
    }
  }

  const newHotel: NewHotel = {
    name:         body.name,
    city:         body.city,
    country:      body.country,
    brand:        body.brand,
    locationType: body.locationType,
    website:      body.website ?? '',
    facebook:     body.facebook ?? '',
    status:       body.status,
    visible:      body.visible ?? true,
  }

  const result = await createHotel(newHotel)
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }

  revalidatePath('/')
  return NextResponse.json({ ok: true, hotel: result.hotel }, { status: 201 })
}

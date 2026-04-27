import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  const secret = process.env.ADMIN_SECRET ?? ''

  if (!secret) {
    return NextResponse.json({ error: 'ADMIN_SECRET not configured' }, { status: 500 })
  }
  if (password !== secret) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
  }

  const cookieStore = await cookies()
  cookieStore.set('kgh_admin', secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return NextResponse.json({ ok: true })
}

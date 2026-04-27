'use client'

import { useState } from 'react'
import type { Hotel } from '@/data/hotels'
import type { NewHotel } from '@/lib/data'

// ── Types ─────────────────────────────────────────────────────
interface HotelRow extends Hotel {
  _website: string
  _visible: boolean
  _saving: boolean
  _saved: boolean
  _error: string
}

const EMPTY_FORM: NewHotel = {
  name: '', city: '', country: 'Thailand', brand: 'Independent',
  locationType: 'city', website: '', facebook: '', status: 'open', visible: true,
}

const BEACH_CITIES = ['Phuket','Krabi','Khao Lak','Pattaya','Rayong','Hua Hin','Bangsaen']
const RESORT_CITIES = ['Nakhon Nayok','Prachuap Khiri Khan']
const HIGHLAND_CITIES = ['Tagaytay']

function autoLocType(city: string): NewHotel['locationType'] {
  if (BEACH_CITIES.some(c => city.toLowerCase().includes(c.toLowerCase()))) return 'beach'
  if (RESORT_CITIES.some(c => city.toLowerCase().includes(c.toLowerCase()))) return 'resort'
  if (HIGHLAND_CITIES.some(c => city.toLowerCase().includes(c.toLowerCase()))) return 'highland'
  return 'city'
}

// ── Add Hotel Form ────────────────────────────────────────────
function AddHotelForm({ onAdded }: { onAdded: (h: Hotel) => void }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<NewHotel>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function set<K extends keyof NewHotel>(k: K, v: NewHotel[K]) {
    setForm(prev => {
      const next = { ...prev, [k]: v }
      if (k === 'city') next.locationType = autoLocType(v as string)
      return next
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const res = await fetch('/api/hotels', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const json = await res.json()
    setSaving(false)
    if (!res.ok) { setError(json.error ?? 'Error'); return }
    onAdded(json.hotel as Hotel)
    setForm(EMPTY_FORM)
    setOpen(false)
  }

  return (
    <div className="add-hotel-wrap">
      <button className="admin-btn admin-btn--add" onClick={() => setOpen(o => !o)}>
        {open ? '✕ Cancel' : '+ Add New Hotel'}
      </button>

      {open && (
        <form className="add-hotel-form" onSubmit={handleSubmit}>
          <h3 className="add-hotel-form__title">New Hotel</h3>
          <div className="add-hotel-grid">

            <div className="add-hotel-field add-hotel-field--full">
              <label>Hotel Name *</label>
              <input className="admin-input" value={form.name}
                onChange={e => set('name', e.target.value)} placeholder="e.g. Kokotel Phuket Rawai" required />
            </div>

            <div className="add-hotel-field">
              <label>City *</label>
              <input className="admin-input" value={form.city}
                onChange={e => set('city', e.target.value)} placeholder="e.g. Phuket" required />
            </div>

            <div className="add-hotel-field">
              <label>Country *</label>
              <select className="admin-input admin-select" value={form.country}
                onChange={e => set('country', e.target.value as NewHotel['country'])}>
                <option value="Thailand">Thailand</option>
                <option value="Philippines">Philippines</option>
              </select>
            </div>

            <div className="add-hotel-field">
              <label>Brand *</label>
              <select className="admin-input admin-select" value={form.brand}
                onChange={e => set('brand', e.target.value as NewHotel['brand'])}>
                <option value="Kokotel">Kokotel</option>
                <option value="Independent">Independent</option>
              </select>
            </div>

            <div className="add-hotel-field">
              <label>Location Type *</label>
              <select className="admin-input admin-select" value={form.locationType}
                onChange={e => set('locationType', e.target.value as NewHotel['locationType'])}>
                <option value="beach">Beach</option>
                <option value="city">City</option>
                <option value="resort">Resort / Nature</option>
                <option value="highland">Highland</option>
              </select>
            </div>

            <div className="add-hotel-field">
              <label>Status *</label>
              <select className="admin-input admin-select" value={form.status}
                onChange={e => set('status', e.target.value as NewHotel['status'])}>
                <option value="open">Open</option>
                <option value="coming_soon">Coming Soon</option>
              </select>
            </div>

            <div className="add-hotel-field add-hotel-field--full">
              <label>Website URL</label>
              <input className="admin-input" type="url" value={form.website}
                onChange={e => set('website', e.target.value)} placeholder="https://…" />
            </div>

            <div className="add-hotel-field add-hotel-field--visible">
              <label>
                <input type="checkbox" checked={form.visible}
                  onChange={e => set('visible', e.target.checked)} />
                <span>Visible on public site</span>
              </label>
            </div>

          </div>

          {error && <p className="admin-error" style={{ marginTop: 8 }}>{error}</p>}

          <button type="submit" className="admin-btn admin-btn--primary" disabled={saving}
            style={{ marginTop: 16 }}>
            {saving ? 'Adding…' : 'Add Hotel'}
          </button>
        </form>
      )}
    </div>
  )
}

// ── Main Admin Client ─────────────────────────────────────────
export default function AdminClient({
  hotels,
  dbConfigured,
}: {
  hotels: Hotel[]
  dbConfigured: boolean
}) {
  const [rows, setRows] = useState<HotelRow[]>(() =>
    hotels.map((h) => ({
      ...h, _website: h.website, _visible: h.visible,
      _saving: false, _saved: false, _error: '',
    }))
  )

  function update(id: string, field: '_website' | '_visible', value: string | boolean) {
    setRows(prev => prev.map(r =>
      r.id === id ? { ...r, [field]: value, _saved: false, _error: '' } : r
    ))
  }

  async function save(id: string) {
    const row = rows.find(r => r.id === id)
    if (!row) return
    setRows(prev => prev.map(r => r.id === id ? { ...r, _saving: true, _error: '' } : r))
    const res = await fetch(`/api/hotels/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ website: row._website, visible: row._visible }),
    })
    const json = await res.json()
    setRows(prev => prev.map(r =>
      r.id === id ? { ...r, _saving: false, _saved: res.ok, _error: res.ok ? '' : json.error ?? 'Error' } : r
    ))
  }

  function handleAdded(hotel: Hotel) {
    setRows(prev => [...prev, {
      ...hotel, _website: hotel.website, _visible: hotel.visible,
      _saving: false, _saved: false, _error: '',
    }])
  }

  const byCountry = rows.reduce<Record<string, HotelRow[]>>((acc, r) => {
    ;(acc[r.country] ??= []).push(r)
    return acc
  }, {})

  return (
    <div className="admin-page">
      <header className="admin-header">
        <span className="admin-header__brand">Koko Global Hospitality</span>
        <h1 className="admin-header__title">Hotel Management</h1>
        {!dbConfigured && (
          <div className="admin-notice">
            <strong>Read-only mode.</strong> Supabase not configured.
            Add <code>SUPABASE_URL</code>, <code>SUPABASE_SERVICE_ROLE_KEY</code>, and{' '}
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to Vercel environment variables.
          </div>
        )}
      </header>

      <div style={{ padding: '24px 40px 0' }}>
        <AddHotelForm onAdded={handleAdded} />
      </div>

      {Object.entries(byCountry).map(([country, countryRows]) => (
        <section key={country} className="admin-section">
          <h2 className="admin-section__title">{country} — {countryRows.length} hotels</h2>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Hotel</th>
                  <th>City</th>
                  <th>Brand</th>
                  <th>Website URL</th>
                  <th>Visible</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {countryRows.map(row => (
                  <tr key={row.id} className={row._visible ? '' : 'admin-row--hidden'}>
                    <td className="admin-td-name">{row.name}</td>
                    <td className="admin-td-city">{row.city}</td>
                    <td>
                      <span className={`admin-badge admin-badge--${row.brand === 'Kokotel' ? 'kokotel' : 'ind'}`}>
                        {row.brand}
                      </span>
                    </td>
                    <td>
                      <input className="admin-input admin-input--url" type="url"
                        value={row._website}
                        onChange={e => update(row.id, '_website', e.target.value)}
                        placeholder="https://…" />
                    </td>
                    <td>
                      <label className="admin-toggle">
                        <input type="checkbox" checked={row._visible}
                          onChange={e => update(row.id, '_visible', e.target.checked)} />
                        <span className="admin-toggle__slider" />
                      </label>
                    </td>
                    <td>
                      <button className="admin-btn admin-btn--save"
                        onClick={() => save(row.id)}
                        disabled={row._saving || !dbConfigured}>
                        {row._saving ? '…' : row._saved ? '✓' : 'Save'}
                      </button>
                      {row._error && <span className="admin-row-error">{row._error}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  )
}

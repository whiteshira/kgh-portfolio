'use client'

import { useState } from 'react'
import type { Hotel } from '@/data/hotels'

interface HotelRow extends Hotel {
  _website: string
  _visible: boolean
  _saving: boolean
  _saved: boolean
  _error: string
}

export default function AdminClient({
  hotels,
  dbConfigured,
}: {
  hotels: Hotel[]
  dbConfigured: boolean
}) {
  const [rows, setRows] = useState<HotelRow[]>(() =>
    hotels.map((h) => ({
      ...h,
      _website: h.website,
      _visible: h.visible,
      _saving: false,
      _saved: false,
      _error: '',
    }))
  )

  function update(id: string, field: '_website' | '_visible', value: string | boolean) {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value, _saved: false, _error: '' } : r))
    )
  }

  async function save(id: string) {
    const row = rows.find((r) => r.id === id)
    if (!row) return

    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, _saving: true, _error: '' } : r)))

    const res = await fetch(`/api/hotels/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ website: row._website, visible: row._visible }),
    })
    const json = await res.json()

    setRows((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, _saving: false, _saved: res.ok, _error: res.ok ? '' : json.error ?? 'Error' }
          : r
      )
    )
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
            <strong>Read-only mode.</strong> Changes cannot be saved until Supabase is configured.
            Add <code>SUPABASE_URL</code>, <code>SUPABASE_SERVICE_ROLE_KEY</code>, and{' '}
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to your Vercel environment variables.
          </div>
        )}
      </header>

      {Object.entries(byCountry).map(([country, countryRows]) => (
        <section key={country} className="admin-section">
          <h2 className="admin-section__title">{country}</h2>
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
                {countryRows.map((row) => (
                  <tr key={row.id} className={row._visible ? '' : 'admin-row--hidden'}>
                    <td className="admin-td-name">{row.name}</td>
                    <td className="admin-td-city">{row.city}</td>
                    <td>
                      <span className={`admin-badge admin-badge--${row.brand === 'Kokotel' ? 'kokotel' : 'ind'}`}>
                        {row.brand}
                      </span>
                    </td>
                    <td>
                      <input
                        className="admin-input admin-input--url"
                        type="url"
                        value={row._website}
                        onChange={(e) => update(row.id, '_website', e.target.value)}
                        placeholder="https://…"
                      />
                    </td>
                    <td>
                      <label className="admin-toggle">
                        <input
                          type="checkbox"
                          checked={row._visible}
                          onChange={(e) => update(row.id, '_visible', e.target.checked)}
                        />
                        <span className="admin-toggle__slider" />
                      </label>
                    </td>
                    <td>
                      <button
                        className="admin-btn admin-btn--save"
                        onClick={() => save(row.id)}
                        disabled={row._saving || !dbConfigured}
                      >
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

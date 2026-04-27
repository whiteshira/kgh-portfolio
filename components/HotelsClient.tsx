'use client'

import Image from 'next/image'
import { useState, useMemo, useCallback } from 'react'
import { Hotel, ALL_CITIES } from '@/data/hotels'
import type { Country, Brand, Status } from '@/data/hotels'

// ── Icons ────────────────────────────────────────────────────
function IconSearch() {
  return (
    <svg className="filter-search__icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6.5" cy="6.5" r="4.5" />
      <path d="M10 10l3.5 3.5" strokeLinecap="round" />
    </svg>
  )
}

function IconGlobe() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 1.5C8 1.5 5.5 4.5 5.5 8s2.5 6.5 2.5 6.5M8 1.5c0 0 2.5 3 2.5 6.5S8 14.5 8 14.5M1.5 8h13" strokeLinecap="round" />
    </svg>
  )
}

// ── Filter state ─────────────────────────────────────────────
interface Filters {
  country: Country | ''
  city: string
  brand: Brand | ''
  status: Status | ''
  search: string
}

const INIT: Filters = { country: '', city: '', brand: '', status: '', search: '' }

// ── Header ───────────────────────────────────────────────────
function Header() {
  return (
    <header className="header">
      <div className="inner header__inner">
        <div className="header__logo">
          <Image
            src="/logo.png"
            alt="Koko Global Hospitality"
            width={52}
            height={52}
            priority
            style={{ mixBlendMode: 'screen' }}
          />
        </div>
        <nav className="header__nav">
          <a href="https://www.kokoglobalhospitality.com/" target="_blank" rel="noopener noreferrer">
            Corporate Site
          </a>
        </nav>
      </div>
    </header>
  )
}

// ── Hero ─────────────────────────────────────────────────────
function Hero({ total }: { total: number }) {
  const cities = ALL_CITIES.length
  return (
    <section className="hero">
      <div className="inner hero__inner">
        <p className="hero__eyebrow">Koko Global Hospitality</p>
        <h1 className="hero__title">Our Hotel Portfolio</h1>
        <p className="hero__subtitle">
          Discover every property we operate — from beachfront resorts to city boutique hotels —
          across Thailand and the Philippines.
        </p>
        <div className="hero__stats">
          <div className="stat">
            <span className="stat__num">{total}</span>
            <span className="stat__label">Properties</span>
          </div>
          <div className="stat">
            <span className="stat__num">2</span>
            <span className="stat__label">Countries</span>
          </div>
          <div className="stat">
            <span className="stat__num">{cities}</span>
            <span className="stat__label">Destinations</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Filter Bar ───────────────────────────────────────────────
interface FilterBarProps {
  filters: Filters
  availableCities: string[]
  count: number
  onUpdate: (key: keyof Filters, value: string) => void
  onClear: () => void
  hasActive: boolean
}

function FilterBar({ filters, availableCities, count, onUpdate, onClear, hasActive }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="inner filter-bar__inner">
        <div className="filter-row">
          <span className="filter-label">Country</span>
          {(['', 'Thailand', 'Philippines'] as (Country | '')[]).map((c) => (
            <button
              key={c || 'all-c'}
              className={`chip${filters.country === c ? ' chip--active' : ''}`}
              onClick={() => onUpdate('country', c)}
            >
              {c || 'All Countries'}
            </button>
          ))}
        </div>

        <div className="filter-row">
          <span className="filter-label">Destination</span>
          <button
            className={`chip${filters.city === '' ? ' chip--active' : ''}`}
            onClick={() => onUpdate('city', '')}
          >
            All Cities
          </button>
          {availableCities.map((city) => (
            <button
              key={city}
              className={`chip${filters.city === city ? ' chip--active' : ''}`}
              onClick={() => onUpdate('city', city)}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="filter-row">
          <span className="filter-label">Brand</span>
          {(['', 'Kokotel', 'Independent'] as (Brand | '')[]).map((b) => (
            <button
              key={b || 'all-b'}
              className={`chip${filters.brand === b ? ' chip--active' : ''}`}
              onClick={() => onUpdate('brand', b)}
            >
              {b || 'All Brands'}
            </button>
          ))}
          <span style={{ marginLeft: 12 }} className="filter-label">Status</span>
          {(['', 'open', 'coming_soon'] as (Status | '')[]).map((s) => (
            <button
              key={s || 'all-s'}
              className={`chip${filters.status === s ? ' chip--active' : ''}`}
              onClick={() => onUpdate('status', s)}
            >
              {s === 'open' ? 'Open' : s === 'coming_soon' ? 'Coming Soon' : 'All Status'}
            </button>
          ))}
          <span style={{ marginLeft: 12 }}>
            <div className="filter-search">
              <IconSearch />
              <input
                className="filter-search__input"
                placeholder="Search hotels…"
                value={filters.search}
                onChange={(e) => onUpdate('search', e.target.value)}
              />
            </div>
          </span>
        </div>

        <div className="filter-bar__bottom">
          <p className="filter-count">
            <strong>{count}</strong> {count === 1 ? 'hotel' : 'hotels'} found
          </p>
          {hasActive && (
            <button className="filter-clear" onClick={onClear}>
              Clear filters
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Hotel Card ───────────────────────────────────────────────
function HotelCard({ hotel, index }: { hotel: Hotel; index: number }) {
  return (
    <div
      className={`card card--${hotel.locationType}`}
      style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
    >
      <div className="card__top">
        <span className={`badge badge--${hotel.brand === 'Kokotel' ? 'kokotel' : 'independent'}`}>
          {hotel.brand}
        </span>
        {hotel.status === 'coming_soon' && (
          <span className="badge badge--soon">Coming Soon</span>
        )}
      </div>

      <h2 className="card__name">{hotel.name}</h2>
      <p className="card__location">{hotel.city} · {hotel.country}</p>

      <div className="card__divider" />

      <div className="card__links">
        {hotel.website && (
          <a
            className="card__link card__link--primary"
            href={hotel.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGlobe />
            Website
          </a>
        )}
      </div>
    </div>
  )
}

// ── Hotel Grid ───────────────────────────────────────────────
function HotelGrid({ filtered }: { filtered: Hotel[] }) {
  if (filtered.length === 0) {
    return (
      <div className="grid">
        <div className="empty-state">
          <p className="empty-state__title">No hotels found</p>
          <p className="empty-state__sub">Try adjusting your filters</p>
        </div>
      </div>
    )
  }
  return (
    <div className="grid">
      {filtered.map((hotel, i) => (
        <HotelCard key={hotel.id} hotel={hotel} index={i} />
      ))}
    </div>
  )
}

// ── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="inner footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Koko Global Hospitality Co., Ltd.
        </p>
        <a
          className="footer__link"
          href="https://www.kokoglobalhospitality.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          kokoglobalhospitality.com
        </a>
      </div>
    </footer>
  )
}

// ── Page ─────────────────────────────────────────────────────
export default function HotelsClient({ hotels }: { hotels: Hotel[] }) {
  const [filters, setFilters] = useState<Filters>(INIT)

  const availableCities = useMemo(() => {
    const src = filters.country
      ? hotels.filter((h) => h.country === filters.country)
      : hotels
    return [...new Set(src.map((h) => h.city))].sort()
  }, [hotels, filters.country])

  const filtered = useMemo(() => {
    const q = filters.search.toLowerCase().trim()
    return hotels.filter((h) => {
      if (filters.country && h.country !== filters.country) return false
      if (filters.city && h.city !== filters.city) return false
      if (filters.brand && h.brand !== filters.brand) return false
      if (filters.status && h.status !== filters.status) return false
      if (q && !h.name.toLowerCase().includes(q) && !h.city.toLowerCase().includes(q)) return false
      return true
    })
  }, [hotels, filters])

  const updateFilter = useCallback((key: keyof Filters, value: string) => {
    setFilters((prev) => {
      const next = { ...prev, [key]: value }
      if (key === 'country' && prev.city) {
        const ok = hotels.some((h) => (!value || h.country === value) && h.city === prev.city)
        if (!ok) next.city = ''
      }
      return next
    })
  }, [hotels])

  const hasActive = Object.values(filters).some(Boolean)

  return (
    <div className="page">
      <Header />
      <Hero total={hotels.length} />
      <FilterBar
        filters={filters}
        availableCities={availableCities}
        count={filtered.length}
        onUpdate={updateFilter}
        onClear={() => setFilters(INIT)}
        hasActive={hasActive}
      />
      <main className="main">
        <div className="inner">
          <HotelGrid filtered={filtered} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

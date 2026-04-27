'use client'

import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import type { Hotel } from '@/data/hotels'
import 'leaflet/dist/leaflet.css'

const CITY_COORDS: Record<string, [number, number]> = {
  'Bangkok':               [13.7563,  100.5018],
  'Phuket':                [ 7.9519,   98.3381],
  'Chiang Mai':            [18.7883,   98.9853],
  'Chiang Rai':            [19.9105,   99.8406],
  'Krabi':                 [ 8.0863,   98.9063],
  'Khao Lak':              [ 8.6372,   98.2967],
  'Pattaya':               [12.9236,  100.8824],
  'Rayong':                [12.6814,  101.2816],
  'Hua Hin':               [12.5684,   99.9577],
  'Bangsaen':              [13.2817,  100.9196],
  'Nakhon Nayok':          [14.2048,  101.2132],
  'Prachuap Khiri Khan':   [11.8126,   99.7957],
  'Cebu':                  [10.3157,  123.8854],
  'Tagaytay':              [14.1153,  120.9621],
}

function makeIcon(brand: string) {
  const color = brand === 'Kokotel' ? '#2C5B6D' : '#6b7c88'
  return L.divIcon({
    className: '',
    html: `<div style="
      width:14px;height:14px;border-radius:50%;
      background:${color};border:2.5px solid #fff;
      box-shadow:0 1px 5px rgba(0,0,0,0.28);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10],
  })
}

function computePositions(hotels: Hotel[]) {
  const byCity = new Map<string, Hotel[]>()
  hotels.forEach(h => {
    const arr = byCity.get(h.city) ?? []
    arr.push(h)
    byCity.set(h.city, arr)
  })
  const pos = new Map<string, [number, number]>()
  byCity.forEach((group, city) => {
    const base = CITY_COORDS[city]
    if (!base) return
    group.forEach((h, i) => {
      if (group.length === 1) { pos.set(h.id, base); return }
      const angle = (i / group.length) * Math.PI * 2
      const r = 0.013
      pos.set(h.id, [base[0] + Math.cos(angle) * r, base[1] + Math.sin(angle) * r])
    })
  })
  return pos
}

function FitBounds({ coords }: { coords: [number, number][] }) {
  const map = useMap()
  useEffect(() => {
    if (coords.length === 0) return
    if (coords.length === 1) { map.setView(coords[0], 11); return }
    map.fitBounds(L.latLngBounds(coords.map(c => L.latLng(c[0], c[1]))), {
      padding: [48, 48],
      maxZoom: 12,
    })
  }, [map, coords])
  return null
}

export default function HotelMapInner({ hotels }: { hotels: Hotel[] }) {
  const positions = useMemo(() => computePositions(hotels), [hotels])
  const coords = useMemo(
    () => hotels.map(h => positions.get(h.id)).filter(Boolean) as [number, number][],
    [hotels, positions]
  )

  return (
    <MapContainer
      center={[12, 105]}
      zoom={5}
      style={{ width: '100%', height: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={19}
      />
      <FitBounds coords={coords} />
      {hotels.map(hotel => {
        const pos = positions.get(hotel.id)
        if (!pos) return null
        return (
          <Marker key={hotel.id} position={pos} icon={makeIcon(hotel.brand)}>
            <Popup>
              <div className="map-popup">
                <strong className="map-popup__name">{hotel.name}</strong>
                <span className="map-popup__loc">{hotel.city} · {hotel.country}</span>
                {hotel.website && (
                  <a href={hotel.website} target="_blank" rel="noopener noreferrer"
                    className="map-popup__link">
                    Visit website →
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

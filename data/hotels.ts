export type LocationType = 'beach' | 'city' | 'resort' | 'highland'
export type Country = 'Thailand' | 'Philippines'
export type Brand = 'Kokotel' | 'Independent'
export type Status = 'open' | 'coming_soon'

export interface Hotel {
  id: string
  name: string
  city: string
  country: Country
  brand: Brand
  locationType: LocationType
  website: string
  facebook: string
  status: Status
  visible: boolean
}

const BEACH_CITIES = ['Phuket', 'Krabi', 'Khao Lak', 'Pattaya', 'Rayong', 'Hua Hin', 'Bangsaen']
const RESORT_CITIES = ['Nakhon Nayok', 'Prachuap Khiri Khan']
const HIGHLAND_CITIES = ['Tagaytay']

function locType(city: string): LocationType {
  if (BEACH_CITIES.includes(city)) return 'beach'
  if (RESORT_CITIES.includes(city)) return 'resort'
  if (HIGHLAND_CITIES.includes(city)) return 'highland'
  return 'city'
}

const raw: Omit<Hotel, 'id' | 'locationType'>[] = [
  // ── Kokotel Bangkok ──────────────────────────────────────────
  {
    name: 'Kokotel Bangkok Dheva Thonglor',
    city: 'Bangkok', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/kokotelBangkokThonglor',
  },
  {
    name: 'Kokotel Bangkok Sukhumvit 50',
    city: 'Bangkok', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/kokotelsukhumvit50',
  },
  {
    name: 'Kokotel Bangkok Surawong',
    city: 'Bangkok', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/KokotelBangkokSurawong',
  },
  // ── Kokotel Cebu ─────────────────────────────────────────────
  {
    name: 'Kokotel Cebu Adira',
    city: 'Cebu', country: 'Philippines', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/kokotelcebuadira',
  },
  {
    name: 'Kokotel Cebu Capitol',
    city: 'Cebu', country: 'Philippines', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: '',
  },
  // ── Kokotel Chiang Mai / Chiang Rai ──────────────────────────
  {
    name: 'Kokotel Chiang Mai Nimman',
    city: 'Chiang Mai', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/KokotelChiangMaiNimman',
  },
  {
    name: 'Kokotel Chiang Rai Airport Suites',
    city: 'Chiang Rai', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/kokotelchiangraiairportsuites',
  },
  // ── Kokotel Khao Lak ─────────────────────────────────────────
  {
    name: 'Kokotel Khao Lak Isara Casa',
    city: 'Khao Lak', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/p/Kokotel-Khao-Lak-Isara-Casa-61567472665960',
  },
  {
    name: 'Kokotel Khao Lak Lighthouse',
    city: 'Khao Lak', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/kokotelkhaolaklighthouse',
  },
  {
    name: 'Kokotel Khao Lak Montana',
    city: 'Khao Lak', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/kokotelkhaolakmontana',
  },
  {
    name: 'Kokotel Khao Lak Seascape',
    city: 'Khao Lak', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/kokotelseascape',
  },
  // ── Kokotel Krabi ────────────────────────────────────────────
  {
    name: 'Kokotel Krabi Ao Nang',
    city: 'Krabi', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/KokotelKrabiAoNang',
  },
  {
    name: 'Kokotel Krabi Oasis',
    city: 'Krabi', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/KokotelKrabiOasis',
  },
  // ── Kokotel Pattaya ──────────────────────────────────────────
  {
    name: 'Kokotel Pattaya North Beach',
    city: 'Pattaya', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/p/Kokotel-Pattaya-North-Beach-61562997584076',
  },
  {
    name: 'Kokotel Pattaya South Beach',
    city: 'Pattaya', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/kokotelpattayasouthbeach',
  },
  // ── Kokotel Phuket ───────────────────────────────────────────
  {
    name: 'Kokotel Phuket Nai Yang',
    city: 'Phuket', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/kokotelphuketnaiyang',
  },
  {
    name: 'Kokotel Phuket Patong',
    city: 'Phuket', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/KokotelPhuketPatong',
  },
  // ── Kokotel Rayong ───────────────────────────────────────────
  {
    name: 'Kokotel Rayong Beachfront',
    city: 'Rayong', country: 'Thailand', brand: 'Kokotel', status: 'open', visible: true,
    website: 'https://www.kokotel.com',
    facebook: 'https://www.facebook.com/KokotelRayongBeachfront',
  },
  // ── Independent – Thailand ───────────────────────────────────
  {
    name: 'At Rice Resort',
    city: 'Nakhon Nayok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.atriceresort.com',
    facebook: 'https://www.facebook.com/atriceresort',
  },
  {
    name: 'AVA SEA Krabi Resort',
    city: 'Krabi', country: 'Thailand', brand: 'Independent', status: 'coming_soon', visible: true,
    website: 'https://www.avaseakrabi.com/',
    facebook: 'https://www.facebook.com/avasearesort',
  },
  {
    name: 'Blue Neptuna Hotel Patong',
    city: 'Phuket', country: 'Thailand', brand: 'Independent', status: 'coming_soon', visible: true,
    website: 'https://www.booking.com/hotel/th/orngaerm-enpthuunaa.html',
    facebook: '',
  },
  {
    name: 'Cubic Pratunam',
    city: 'Bangkok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.booking.com/hotel/th/cubic-pratunam.html',
    facebook: 'https://www.facebook.com/cubicpratunam',
  },
  {
    name: 'Hotel Wizpark Ratchada',
    city: 'Bangkok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://hotelwizpark.com',
    facebook: 'https://www.facebook.com/hotelwizparkratchada',
  },
  {
    name: 'Koh Talu On Shore Resort',
    city: 'Prachuap Khiri Khan', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.taluisland.com/kohtaluonshore',
    facebook: 'https://www.facebook.com/KohTaluOnShore',
  },
  {
    name: 'LiveZen Bangkok',
    city: 'Bangkok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.livezenbangkok.com',
    facebook: 'https://www.facebook.com/Livezen.Bangkok',
  },
  {
    name: 'Manditel North Pattaya',
    city: 'Pattaya', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.manditel.com',
    facebook: 'https://www.facebook.com/profile.php?id=61586305439609',
  },
  {
    name: 'Nidhra Boutique Hotel Bangkok',
    city: 'Bangkok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://nidhraboutique.com',
    facebook: 'https://www.facebook.com/nidhrabangkok',
  },
  {
    name: 'Ratri Hotel Phuket Old Town',
    city: 'Phuket', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.ratriphuket.com',
    facebook: 'https://www.facebook.com/ratrihotelphuket',
  },
  {
    name: 'Rose Apple Hotel',
    city: 'Bangkok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://roseapplehotel.com',
    facebook: 'https://www.facebook.com/roseapplehotel',
  },
  {
    name: 'Royal Pavilion Hua Hin',
    city: 'Hua Hin', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.ryphuahin.com',
    facebook: 'https://www.facebook.com/RYPHUAHIN',
  },
  {
    name: 'Ruamchitt Plaza Hotel',
    city: 'Bangkok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://ruamchitt.com',
    facebook: 'https://www.facebook.com/ruamchittplaza',
  },
  {
    name: 'Sea Side Ao Nang Krabi',
    city: 'Krabi', country: 'Thailand', brand: 'Independent', status: 'coming_soon', visible: false,
    website: 'https://www.booking.com/hotel/th/sea-side-the-landmark-krabi-ao-nang-beach.html',
    facebook: 'https://www.facebook.com/profile.php?id=61575267752107',
  },
  {
    name: 'Spittze Hotel Pratunam',
    city: 'Bangkok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.booking.com/hotel/th/spitze.html',
    facebook: 'https://www.facebook.com/spittzehotel',
  },
  {
    name: 'Tatami Hotel Phuket',
    city: 'Phuket', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.booking.com/hotel/th/tatami-phuket.html',
    facebook: 'https://www.facebook.com/people/Tatami-Hotel/61576671947434',
  },
  {
    name: 'The Kite Hotel Bangsaen',
    city: 'Bangsaen', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.thekitehotel.com',
    facebook: 'https://www.facebook.com/TheKiteHotelBangsaen',
  },
  {
    name: 'The Rich Grand Residence Sukhumvit',
    city: 'Bangkok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.therichresidences.com/grand',
    facebook: 'https://www.facebook.com/therichgrandresidence',
  },
  {
    name: 'The Rich Residence Sukhumvit',
    city: 'Bangkok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.therichresidences.com',
    facebook: 'https://www.facebook.com/therichresidencesukhumvitnana',
  },
  {
    name: 'Travelier Hostel',
    city: 'Bangkok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.booking.com/hotel/th/travelier-hostel.en-gb.html',
    facebook: 'https://www.facebook.com/travelierhostel',
  },
  {
    name: 'V Style Boutique Hotel',
    city: 'Pattaya', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.booking.com/hotel/th/v-style-boutique.html',
    facebook: 'https://www.facebook.com/profile.php?id=61582355910546',
  },
  {
    name: 'VOQUE Hotel & Serviced Residence Sukhumvit 51',
    city: 'Bangkok', country: 'Thailand', brand: 'Independent', status: 'open', visible: true,
    website: 'https://www.voquesukhumvit.com/',
    facebook: 'https://www.facebook.com/Voquehotel51',
  },
  // ── Independent – Philippines ─────────────────────────────────
  {
    name: 'Alpa City Suites',
    city: 'Cebu', country: 'Philippines', brand: 'Independent', status: 'open', visible: true,
    website: 'https://alpacitysuites.com/',
    facebook: 'https://www.facebook.com/AlpaCitySuitesHotel',
  },
  {
    name: 'La Bella Boutique Hotel',
    city: 'Tagaytay', country: 'Philippines', brand: 'Independent', status: 'open', visible: true,
    website: 'https://labellaboutiquehotel.com/en',
    facebook: 'https://www.facebook.com/LaBellaBoutiqueHotel',
  },
  {
    name: 'Mangrove Place and Residences',
    city: 'Cebu', country: 'Philippines', brand: 'Independent', status: 'coming_soon', visible: false,
    website: 'https://mangroveplaceresidences.com/',
    facebook: 'https://www.facebook.com/p/Mangrove-Place-and-Residences-Mactan-61554477525930',
  },
  {
    name: 'oneTree Plaza Hotel Cebu',
    city: 'Cebu', country: 'Philippines', brand: 'Independent', status: 'coming_soon', visible: true,
    website: '',
    facebook: 'https://www.facebook.com/p/OneTree-Plaza-Hotel-61575310798909',
  },
]

export const hotels: Hotel[] = raw.map((h, i) => ({
  ...h,
  id: `hotel-${i}`,
  locationType: locType(h.city),
}))

export const ALL_CITIES = [...new Set(hotels.map((h) => h.city))].sort()
export const ALL_COUNTRIES: Country[] = ['Thailand', 'Philippines']

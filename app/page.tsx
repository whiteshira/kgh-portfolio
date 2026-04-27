import { getVisibleHotels } from '@/lib/data'
import HotelsClient from '@/components/HotelsClient'

export const revalidate = 3600

export default async function Page() {
  const hotels = await getVisibleHotels()
  return <HotelsClient hotels={hotels} />
}

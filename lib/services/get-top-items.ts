import fetchWebApi from '@/lib/services/fetch-web-api'
import type { TimePeriod } from '@/types/api'

async function getTopItems(
  token: string,
  type: 'tracks' | 'artists',
  timeRange: TimePeriod,
  limit: number,
) {
  return (
    await fetchWebApi({
      token,
      endpoint: `v1/me/top/${type}?time_range=${timeRange}&limit=${limit.toString()}`,
      method: 'GET',
    })
  ).items
}

export default getTopItems

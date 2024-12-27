import fetchWebApi from '@/lib/services/fetch-web-api'

async function getTopItems(
  token: string,
  type: string,
  timeRange: string,
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

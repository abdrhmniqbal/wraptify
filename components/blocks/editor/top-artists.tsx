'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { Session } from 'next-auth'
import getTopItems from '@/lib/services/get-top-items'
import TopArtistsFrame from '@/components/blocks/frame/top-artists'
import { TimePeriod, type Artist } from '@/types/api'
import TopItemsEditor from '@/components/blocks/editor/top-items'

export function TopArtists({ session }: { session: Session }) {
  const searchParams = useSearchParams()
  const bgColor = searchParams.get('bgColor')
  const textColor = searchParams.get('textColor')
  const [artistsList, setArtistsList] = useState<Artist[]>()
  const timePeriod =
    (searchParams.get('time_period') as TimePeriod) || 'short_term'

  useEffect(() => {
    if (session) {
      const fetchArtists = async () => {
        const songs: Artist[] = await getTopItems(
          session.accessToken,
          'artists',
          timePeriod,
          5,
        )
        setArtistsList(songs)
      }
      fetchArtists()
    }
  }, [timePeriod, session])

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 gap-y-12 pb-40 lg:grid-cols-2 lg:pb-6">
      <TopItemsEditor items={artistsList} />
      <TopArtistsFrame
        artists={artistsList!}
        bgColor={bgColor!}
        textColor={textColor!}
      />
    </div>
  )
}

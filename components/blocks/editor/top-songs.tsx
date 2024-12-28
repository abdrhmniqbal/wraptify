'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { Session } from 'next-auth'
import getTopItems from '@/lib/services/get-top-items'
import TopSongsFrame from '@/components/blocks/frame/top-songs'
import { TimePeriod, type Track } from '@/types/api'
import TopItemsEditor from '@/components/blocks/editor/top-items'
import { Note } from '@/components/ui'

export function TopSongs({ session }: { session: Session }) {
  const searchParams = useSearchParams()
  const bgColor = searchParams.get('bgColor')
  const textColor = searchParams.get('textColor')
  const [songsList, setSongsList] = useState<Track[]>()
  const timePeriod =
    (searchParams.get('time_period') as TimePeriod) || 'short_term'

  useEffect(() => {
    if (session) {
      const fetchSongs = async () => {
        const songs: Track[] = await getTopItems(
          session.accessToken,
          'tracks',
          timePeriod,
          5,
        )
        setSongsList(songs)
      }
      fetchSongs()
    }
  }, [timePeriod, session])

  return (
    <>
      {songsList && songsList.length < 5 && (
        <Note intent="warning" className="mt-4">
          Not enough data available to display.
        </Note>
      )}
      <div className="mt-8 grid grid-cols-1 gap-6 gap-y-12 pb-40 lg:grid-cols-2 lg:pb-6">
        <TopItemsEditor items={songsList} />
        <TopSongsFrame
          songs={songsList!}
          bgColor={bgColor!}
          textColor={textColor!}
        />
      </div>
    </>
  )
}

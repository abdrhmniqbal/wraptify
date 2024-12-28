'use client'

import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureTrigger,
} from 'ui'
import { Button } from '@/components/ui/button'
import { handleImageDownload } from '@/lib/utils/download'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import CustomizeColor from '@/components/blocks/customization/color'
import type { Session } from 'next-auth'
import getTopItems from '@/lib/services/get-top-items'
import TopSongsFrame from '@/components/blocks/frame/top-songs'
import CustomizeTimePeriod from '@/components/blocks/customization/time-period'
import { TimePeriod, type Track } from '@/types/api'

export function TopSongs({ session }: { session: Session }) {
  const searchParams = useSearchParams()
  const bgColor = searchParams.get('bgColor')
  const textColor = searchParams.get('textColor')
  const [songsList, setSongsList] = useState<Track[]>()
  const [timePeriod, setTimePeriod] = useState<TimePeriod>(
    (searchParams.get('time_period') as TimePeriod) || 'short_term',
  )

  useEffect(() => {
    if (session) {
      const getSongs = async (session: Session, timePeriod: TimePeriod) => {
        const songs: Track[] = await getTopItems(
          session.accessToken,
          'tracks',
          timePeriod,
          5,
        )
        setSongsList(songs)
      }
      getSongs(session, timePeriod)
    }
  }, [timePeriod, setTimePeriod, session])

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 gap-y-12 pb-40 lg:grid-cols-2 lg:pb-6">
      <div className="order-last flex w-full flex-col space-y-4 lg:order-first">
        <DisclosureGroup defaultExpandedKeys={['customize']}>
          <Disclosure id="customize" className="border-b-0">
            <DisclosureTrigger>Customize</DisclosureTrigger>
            <DisclosurePanel>
              <div className="flex flex-col space-y-4 px-2">
                <CustomizeColor />
                <CustomizeTimePeriod
                  timePeriod={timePeriod}
                  setTimePeriod={setTimePeriod}
                />
              </div>
            </DisclosurePanel>
          </Disclosure>
        </DisclosureGroup>
        <Button
          onPress={() => handleImageDownload({ id: 'top_songs' })}
          size="large"
          className="w-full"
          isDisabled={!songsList}
        >
          {songsList ? 'Download' : 'Please wait'}
        </Button>
      </div>
      <TopSongsFrame
        songs={songsList!}
        bgColor={bgColor!}
        textColor={textColor!}
      />
    </div>
  )
}

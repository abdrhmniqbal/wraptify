'use client'

import CustomizeColor from '@/components/blocks/customization/color'
import CustomizeTimePeriod from '@/components/blocks/customization/time-period'
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureTrigger,
} from '@/components/ui'
import { handleImageDownload } from '@/lib/utils/download'
import type { Artist, Track } from '@/types/api'

interface TopItemsEditorProps {
  items?: Track[] | Artist[]
}

export default function TopItemsEditor({ items }: TopItemsEditorProps) {
  const isTrackArray = (arr: Track[] | Artist[]): arr is Track[] =>
    arr.length > 0 && 'artists' in arr[0]

  return (
    <div className="order-last flex w-full flex-col space-y-4 lg:order-first">
      <DisclosureGroup defaultExpandedKeys={['customize']}>
        <Disclosure id="customize" className="border-b-0">
          <DisclosureTrigger>Customize</DisclosureTrigger>
          <DisclosurePanel>
            <div className="flex flex-col space-y-4 px-2">
              <CustomizeColor />
              <CustomizeTimePeriod />
            </div>
          </DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>
      <Button
        onPress={() =>
          handleImageDownload({
            id: items && isTrackArray(items) ? 'top_songs' : 'top_artists',
          })
        }
        size="large"
        className="w-full"
        isDisabled={!items}
      >
        {items ? 'Download' : 'Please wait'}
      </Button>
    </div>
  )
}

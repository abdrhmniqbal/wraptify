import { AspectRatio, Loader } from 'ui'
import Image from 'next/image'
import WrapFrame from '@/components/blocks/wrap-frame'
import Spotify from '@/components/icons/spotify'
import type { Artist } from '@/types/api'

interface TopArtistsFrameProps {
  artists?: Artist[]
  bgColor: string
  textColor: string
}

const TopArtistsFrame = ({
  artists,
  bgColor,
  textColor,
}: TopArtistsFrameProps) => {
  return (
    <WrapFrame>
      <div
        id="top_artists"
        className="h-full w-full"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {artists ? (
          <div className="h-[476px] px-6 py-14">
            <div className="text-xl font-bold">My Top Artists</div>
            <div className="mt-6 flex flex-col items-center justify-center space-y-2">
              {artists.length > 0 ? (
                artists.map(({ name, images }, index) => (
                  <div
                    className="flex w-full items-center justify-center space-x-2"
                    key={index}
                  >
                    <div className="flex aspect-square size-4 items-center justify-center">
                      <span className="text-xl font-extrabold">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex aspect-square size-14 items-center">
                      <AspectRatio ratio={1}>
                        <Image
                          alt={name}
                          src={images[0].url}
                          width={256}
                          height={256}
                          className="h-full w-full object-cover"
                          unoptimized
                        />
                      </AspectRatio>
                    </div>
                    <div className="flex h-full w-full flex-col justify-center">
                      <span className="line-clamp-1 text-xs/[1.125rem] font-bold">
                        {name}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-sm">No data found.</div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Loader className="size-8" />
          </div>
        )}
        <div className="flex w-full items-center justify-between px-4">
          <Spotify width="76px" height="22px" fill={textColor} />
          <div className="text-sm font-semibold">{`s.id/wraptify`}</div>
        </div>
      </div>
    </WrapFrame>
  )
}

export default TopArtistsFrame

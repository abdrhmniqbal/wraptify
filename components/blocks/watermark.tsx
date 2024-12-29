import Spotify from '@/components/icons/spotify'

export default function Watermark({ textColor }: { textColor: string }) {
  return (
    <div className="flex w-full items-center justify-between px-4">
      <Spotify width="76px" height="22px" fill={textColor} />
      <div
        className="pb-1 text-sm font-bold"
        style={{ color: textColor }}
      >{`s.id/wraptify`}</div>
    </div>
  )
}

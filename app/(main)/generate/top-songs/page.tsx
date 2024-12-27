import Header from '@/components/blocks/header'
import { TopSongs } from '@/components/blocks/top-songs'
import { auth } from '@/lib/auth'

export default async function Generate() {
  const session = await auth()
  return (
    <>
      <Header
        title="Get your top songs"
        description="Wrap your top songs at certain period"
      />
      <TopSongs session={session!} />
    </>
  )
}

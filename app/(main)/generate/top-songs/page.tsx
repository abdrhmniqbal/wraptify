import PageHeader from '@/components/blocks/page-header'
import { TopSongs } from '@/components/blocks/top-songs'
import { auth } from '@/lib/auth'

export default async function Generate() {
  const session = await auth()
  return (
    <>
      <PageHeader
        title="Top songs"
        description="Wrap your top songs at certain period"
      />
      <TopSongs session={session!} />
    </>
  )
}

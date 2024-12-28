import PageHeader from '@/components/blocks/page-header'
import { auth } from '@/lib/auth'
import { TopArtists } from '@/components/blocks/editor/top-artists'

export default async function Generate() {
  const session = await auth()
  return (
    <>
      <PageHeader
        title="Top artists"
        description="Wrap your top songs at certain period"
      />
      <TopArtists session={session!} />
    </>
  )
}

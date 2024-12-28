import PageHeader from '@/components/blocks/page-header'
import WrapTypeCard from '@/components/blocks/wrap-type-card'
import { auth } from '@/lib/auth'
import { MusicNote03Icon, UserMultiple02Icon } from 'hugeicons-react'

export default async function Generate() {
  const session = await auth()
  const CardItem = [
    {
      title: 'Top Songs',
      description: 'Wrap your top songs at certain period.',
      href: '/generate/top-songs',
      query: { time_period: 'short_term' },
      icon: MusicNote03Icon,
    },
    {
      title: 'Top Artists',
      description: 'Wrap your top artists at certain period.',
      href: '/generate/top-artists',
      query: { time_period: 'short_term' },
      icon: UserMultiple02Icon,
    },
  ]
  return (
    <>
      <PageHeader
        title={`Hello, ${session?.user.name}!`}
        description="What would you wrap now?"
      />
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {CardItem.map((item, index) => {
          return (
            <WrapTypeCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              href={item.href}
              query={item.query}
            />
          )
        })}
      </div>
    </>
  )
}

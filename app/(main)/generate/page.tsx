import Header from '@/components/blocks/header'
import HomeCard from '@/components/blocks/home-card'
import { auth } from '@/lib/auth'
import { MusicNote01Icon } from 'hugeicons-react'

export default async function Generate() {
  const session = await auth()
  const CardItem = [
    {
      title: 'Top Songs',
      description: 'Wrap your top songs at certain period.',
      href: '/generate/top-songs',
      query: { time_period: 'short_term' },
      icon: MusicNote01Icon,
    },
  ]
  return (
    <>
      <Header
        title={`Hello, ${session?.user.name}!`}
        description="What would you wrap now?"
      />
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CardItem.map((item, idx) => {
          return (
            <HomeCard
              key={idx}
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

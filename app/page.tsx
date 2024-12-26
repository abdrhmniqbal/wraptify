import Hero from '@/components/blocks/hero'
import Navbar from '@/components/blocks/navbar'

export default function Home() {
  return (
    <div className="homepage mx-auto flex w-full flex-col">
      <Navbar />
      <Hero />
    </div>
  )
}

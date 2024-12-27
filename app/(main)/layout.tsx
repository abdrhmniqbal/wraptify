import Navbar from '@/components/blocks/navbar'
import { Container } from 'ui'
import { Footer } from '@/components/blocks/footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container className="mx-auto flex min-h-screen w-full flex-col">
      <div className="min-h-screen">
        <Navbar />
        {children}
      </div>
      <Footer />
    </Container>
  )
}

import Navbar from '@/components/blocks/navbar'
import { Container } from 'ui'
import Link from 'next/link'

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
      <div className="text-muted-foreground container mb-8 text-sm">
        Built by&nbsp;
        <Link
          href="https://github.com/abdrhmniqbal"
          passHref
          className="text-blue-500 underline hover:text-blue-700"
          target="blank"
        >
          Iqbal Abdurrahman
        </Link>
        .
      </div>
    </Container>
  )
}

import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session) {
    redirect('/api/auth/signin')
  } else {
    return children
  }
}

import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (session) {
    return redirect('/')
  }

  return (
    <div className="relative flex min-h-svh items-center justify-center">
      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute right-0 bottom-0 h-120 w-200 rounded-xl bg-gradient-to-br from-neutral-500 to-gray-500 opacity-5 blur-3xl" />
        {children}
      </div>
    </div>
  )
}

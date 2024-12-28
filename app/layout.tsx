import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toast } from '@/components/ui'
import { Providers } from '@/components/providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Wraptify - Wrap Your Spotify!',
  description:
    'The ultimate way to wrap your spotify without waiting end of the year.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} homepage antialiased`}
      >
        <Providers>
          <Toast />
          <div className="mx-auto flex h-fit w-full flex-col sm:max-w-4xl">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}

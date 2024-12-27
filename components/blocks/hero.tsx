'use client'

import { buttonStyles } from 'ui'
import Link from 'next/link'
import { ArrowRight01Icon, Github01Icon } from 'hugeicons-react'
import { cn } from '@/lib/utils/classes'

export default function Hero() {
  return (
    <div className="container mx-auto max-w-4xl space-y-8 py-20 text-center">
      <h2 className="text-primary mx-auto py-2 text-center text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
        Wrap your Spotify
        <br />
        <span className="mt-1 inline-flex bg-gradient-to-r from-[#9867F0] to-[#ED4E50] bg-clip-text leading-12 text-transparent md:leading-20">
          anytime you want.
        </span>
      </h2>
      <p className="text-accent-foreground mx-auto max-w-xl">
        The ultimate way to wrap your spotify without waiting end of the year.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="https://github.com/abdrhmniqbal/wraptify"
          target="blank"
          passHref
          className={cn(
            buttonStyles({ appearance: 'outline' }),
            'w-full sm:w-fit',
          )}
        >
          <Github01Icon data-slot="Icon" />
          <span>Star on Github</span>
        </Link>
        <Link
          href="/generate"
          className={cn(buttonStyles(), 'w-full sm:w-fit')}
        >
          <span>Get Your List Now</span>
          <ArrowRight01Icon data-slot="icon" />
        </Link>
      </div>
    </div>
  )
}

'use client'

import { buttonStyles } from 'ui'
import Link from 'next/link'
import { ArrowRight01Icon, Github01Icon } from 'hugeicons-react'

const Hero = () => (
  <div className="container mx-auto max-w-4xl space-y-5 py-20 text-center">
    <h2 className="text-primary mx-auto py-2 text-center text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
      Wrap your spotify
      <br />
      <span className="mt-1 inline-flex h-10 bg-gradient-to-r from-[#9867F0] to-[#ED4E50] bg-clip-text pb-2 text-transparent sm:h-14 lg:h-[4.125rem]">
        anytime you want.
      </span>
    </h2>
    <p className="text-accent-foreground mx-auto max-w-xl">
      The ultimate way to wrap your spotify without waiting end of the year.
      Generate your wrapped list now.
    </p>
    <div className="flex items-center justify-center gap-x-3 font-medium">
      <Link
        href="https://github.com/iblabd/wraptify"
        target="blank"
        passHref
        className={buttonStyles({ appearance: 'outline' })}
      >
        <Github01Icon data-slot="Icon" />
        <span>Star on Github</span>
      </Link>
      <Link href="/generate" className={buttonStyles()}>
        <span>Wrap Your Spotify</span>
        <ArrowRight01Icon data-slot="icon" />
      </Link>
    </div>
  </div>
)

export default Hero

import { Cancel01Icon, Menu01Icon } from 'hugeicons-react'
import { Button } from 'ui'
import Link from 'next/link'

interface NavHeaderProps {
  onPress: () => void
  state: boolean
}

export default function NavHeader({ onPress, state }: NavHeaderProps) {
  return (
    <div className="flex items-center justify-between py-5 md:block">
      <Link href="/">
        <div className="text-xl font-bold">Wraptify</div>
      </Link>
      <div className="md:hidden">
        <Button
          appearance="plain"
          size="square-petite"
          aria-label="Open the menu"
          onPress={onPress}
        >
          {state ? (
            <Cancel01Icon className="size-6" data-slot="icon" strokeWidth={2} />
          ) : (
            <Menu01Icon className="size-6" data-slot="icon" strokeWidth={2} />
          )}
        </Button>
      </div>
    </div>
  )
}

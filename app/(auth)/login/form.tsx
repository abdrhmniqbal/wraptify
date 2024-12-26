'use client'

import { SpotifyIcon } from 'hugeicons-react'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { Button, Card, Note } from 'ui'

export function LoginForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  return (
    <Card className="ring-fg/10 dark:inset-ring-fg/5 inset-shadow-fg/5 relative border-0 inset-shadow-xs ring">
      <Card.Header>
        <Card.Title>Login</Card.Title>
        <Card.Description>Login to your account</Card.Description>
        <Note intent="warning">
          Wraptify is currently on beta phase. Join waitlist to get an early
          access.
        </Note>
      </Card.Header>
      <Card.Content>
        <Button
          onPress={() => signIn('spotify', { callbackUrl })}
          appearance="outline"
          className="w-full"
        >
          <SpotifyIcon strokeWidth={2} data-slot="icon" />
          Login with Spotify
        </Button>
      </Card.Content>
    </Card>
  )
}

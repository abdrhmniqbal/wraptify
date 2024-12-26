'use client'

import { SpotifyIcon } from 'hugeicons-react'
import { FormEvent } from 'react'

import { toast } from 'sonner'
import { Button, Card, Form, Note } from 'ui'

export function LoginForm() {
  const submit = (e: FormEvent) => {
    e.preventDefault()

    toast.success('Login Successful')
  }
  return (
    <Card className="ring-fg/10 dark:inset-ring-fg/5 inset-shadow-fg/5 relative border-0 inset-shadow-xs ring">
      <Card.Header>
        <Card.Title>Login</Card.Title>
        <Card.Description>Login to your account</Card.Description>
        <Note intent="warning">
          Wraptify is currently on beta. Join the waitlist to get early access.
        </Note>
      </Card.Header>
      <Card.Content>
        <Form onSubmit={submit} className="space-y-6">
          <Button type="submit" appearance="outline" className="w-full">
            <SpotifyIcon strokeWidth={2} data-slot="icon" />
            Login with Spotify
          </Button>
        </Form>
      </Card.Content>
    </Card>
  )
}

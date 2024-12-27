'use client'

import { cn } from '@/lib/utils/classes'
import { buttonStyles, Container, Modal } from 'ui'
import NavHeader from './nav-header'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [state, setState] = useState(false)
  const { status } = useSession()

  const navigation = [{ name: 'Generate', href: '/generate' }]
  return (
    <header className="relative mt-2">
      <div className="md:hidden">
        <NavHeader state={state} onPress={() => setState(!state)} />
      </div>
      <nav
        className={`w-full pb-5 md:static md:block md:text-sm ${state ? 'bg-bg absolute top-2 z-20 rounded-xl border shadow-lg md:border-none md:shadow-none' : 'hidden'}`}
      >
        <Container className="w-full items-center gap-x-20 md:flex">
          <NavHeader state={state} onPress={() => setState(!state)} />
          <div
            className={`text-accent-fg mt-2 flex-1 items-center md:mt-0 md:flex md:font-medium ${state ? 'block' : 'hidden'} `}
          >
            <ul className="items-center justify-center space-y-2 md:flex md:space-y-0 md:space-x-6">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className={cn(
                        buttonStyles({ appearance: 'plain' }),
                        'justify-start md:justify-center',
                        'hover:bg-secondary',
                      )}
                      scroll={false}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mt-2 flex-1 items-center justify-end gap-x-6 md:mt-0 md:flex md:space-y-0">
              {status === 'authenticated' ? (
                <Modal>
                  <Modal.Trigger
                    className={cn(
                      buttonStyles({
                        appearance: 'plain',
                      }),
                      'w-full justify-start md:w-fit md:justify-center',
                    )}
                  >
                    Logout
                  </Modal.Trigger>
                  <Modal.Content role="alertdialog">
                    <Modal.Header>
                      <Modal.Title>Confirm Logout</Modal.Title>
                      <Modal.Description>
                        Logging out will discard unsaved changes. Are you sure
                        want to proceed?
                      </Modal.Description>
                    </Modal.Header>
                    <Modal.Footer className="flex justify-end">
                      <Modal.Close appearance="outline">Cancel</Modal.Close>
                      <Modal.Close
                        appearance="solid"
                        intent="danger"
                        onPress={() => signOut()}
                      >
                        Log Out Anyway
                      </Modal.Close>
                    </Modal.Footer>
                  </Modal.Content>
                </Modal>
              ) : (
                <Link
                  href="/login"
                  className={cn(
                    buttonStyles({ size: 'small' }),
                    'w-full md:w-fit',
                  )}
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

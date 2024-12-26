'use client'

import { cn } from '@/utils/classes'
import { buttonStyles, Modal } from 'ui'
import NavHeader from './nav-header'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [state, setState] = useState(false)
  const { status } = useSession()

  const navigation = [{ name: 'Generate', href: '/generate' }]
  return (
    <header className="relative">
      <div className="container md:hidden">
        <NavHeader state={state} onPress={() => setState(!state)} />
      </div>
      <nav
        className={`pb-5 md:static md:block md:text-sm ${state ? 'bg-bg absolute inset-x-4 top-2 z-20 rounded-xl border shadow-lg md:border-none md:shadow-none' : 'hidden'}`}
      >
        <div className="lg:container-lg container items-center gap-x-20 md:flex">
          <NavHeader state={state} onPress={() => setState(!state)} />
          <div
            className={`text-accent-fg mt-8 flex-1 items-center md:mt-0 md:flex md:font-medium ${state ? 'block' : 'hidden'} `}
          >
            <ul className="items-center justify-center space-y-6 md:flex md:space-y-0 md:space-x-6">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="hover:text-accent-fg/80">
                    <Link href={item.href} className="block" scroll={false}>
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mt-6 flex-1 items-center justify-end gap-x-6 space-y-6 md:mt-0 md:flex md:space-y-0">
              {status === 'authenticated' ? (
                <Modal>
                  <Modal.Trigger
                    className={buttonStyles({
                      appearance: 'plain',
                      size: 'small',
                    })}
                  >
                    Logout
                  </Modal.Trigger>
                  <Modal.Content role="alertdialog">
                    <Modal.Header>
                      <Modal.Title>Logout from your account?</Modal.Title>
                      <Modal.Description>
                        This will deleting all unsaved changes.
                      </Modal.Description>
                    </Modal.Header>
                    <Modal.Footer className="flex justify-end">
                      <Modal.Close appearance="outline">Cancel</Modal.Close>
                      <Modal.Close
                        appearance="solid"
                        intent="danger"
                        onPress={() => signOut()}
                      >
                        Yes, logout
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
        </div>
      </nav>
    </header>
  )
}

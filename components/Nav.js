import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <nav>
      <Link href='/auth/login'>Login</Link>
      <Link href='/auth/register'>Register</Link>
    </nav>
  )
}

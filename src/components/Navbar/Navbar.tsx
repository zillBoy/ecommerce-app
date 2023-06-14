// React Dependencies
import React from 'react'

// Internal Dependencies
import { Button } from '../common/Button/Button'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between mx-20 my-12'>
      <h1>Artopia</h1>
      <Button text='Sign In' />
    </nav>
  )
}
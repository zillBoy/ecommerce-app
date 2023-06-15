// External Dependencies
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Internal Dependencies
import { Navbar } from '@/components/Navbar/Navbar'

describe('Navbar', () => {
  it('shows the app logo', () => {
    render(<Navbar />)

    const logo = screen.getByRole('heading', {
      name: 'Artopia'
    })

    expect(logo).toBeInTheDocument()
  })

  it ('shows the "signIn" button', () => {
    render(<Navbar />)

    const signInButton = screen.getByRole('button', {
      name: 'Sign In'
    })

    expect(signInButton).toBeInTheDocument()
  })
})
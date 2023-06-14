// External Dependencies
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Internal Dependencies
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: "Home Page",
    })

    expect(heading).toBeInTheDocument()
  })
})
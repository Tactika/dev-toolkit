import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('should render home page', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /JoBox Tool Co Modern eCommerce/i,
        })

        expect(heading).toBeInTheDocument()
    })
})
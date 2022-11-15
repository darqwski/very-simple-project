import { render } from '@testing-library/react'
import React from 'react'
import SmartComponent from '../SmartComponent'

describe('SmartComponent', () => {
    it('Should work', () => {
        const { getByText } = render(<SmartComponent />)

        expect(getByText(/Counter value/)).toBeTruthy()
    })
})

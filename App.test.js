import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

describe('<App />', () => {
  it('shows button to calculate', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('calculate-btn')).not.toBeNull()
  })

  it('shows all five editable inputs', () => {
    const { getAllByTestId } = render(<App />)
    expect(getAllByTestId(/value[1-5]/).length).toBe(5)
  })

  it('shows result input', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('result')).not.toBeNull()
  })

  it('calculates right', () => {

  })
})
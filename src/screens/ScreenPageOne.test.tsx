import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react-native'

import ScreenPageOne from './ScreenPageOne'

test('increase count by 1', () => {
  render(<ScreenPageOne />)

  fireEvent.press(screen.getByText('Increase'))

  expect(screen.getByText('value: 2')).not.toBeNull()
  // expect(screen.getByText('Ohhh yes!')).not.toBeNull()
})

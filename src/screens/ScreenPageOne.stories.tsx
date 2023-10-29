import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import ScreenPageOne from './ScreenPageOne'

export default {
  title: 'Screens/PageOne',
  component: ScreenPageOne,
} as ComponentMeta<typeof ScreenPageOne>

export const Primary: ComponentStory<typeof ScreenPageOne> = () => (
  <ScreenPageOne />
)

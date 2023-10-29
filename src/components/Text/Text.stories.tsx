import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from './index'

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>

export const Primary: ComponentStory<typeof Text> = () => (
  <Text size="title">Hello Title</Text>
)

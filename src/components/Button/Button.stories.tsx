import React from 'react'

import { storiesOf } from '@storybook/react-native'

import { Button } from '.'

storiesOf('Components/Button', module).add('default', () => (
  <Button>Default button</Button>
))

// import { Button } from './index'

// export default {
//   title: 'Button',
//   component: Button,
//   args: {
//     title: 'Hello world',
//   },
// }

// export const Basic = args => <Button {...args} />

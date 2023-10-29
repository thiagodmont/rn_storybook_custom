import StorybookHome from '@acme/storybook'

import { WITH_STORYBOOK } from '@env'
import { Navigation } from 'react-native-navigation'

import App from './App'

Navigation.registerComponent('com.storybookapp.RootScreen', () =>
  WITH_STORYBOOK === '1' ? StorybookHome : App,
)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'com.storybookapp.RootScreen',
      },
    },
  })
})

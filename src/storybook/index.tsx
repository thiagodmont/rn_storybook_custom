import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native'

import { getStories } from './stories'

addDecorator(StoryFn => {
  return (
    <View style={styles.container}>
      <StoryFn />
    </View>
  )
})

// @ts-expect-error miss the require type for return;
configure(getStories, module)

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
  onDeviceUI: false,
  shouldPersistSelection: true,
  enableWebsockets: true,
})

export default () => (
  <SafeAreaView style={styles.safearea}>
    <StorybookUI />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  safearea: { flex: 1 },
  container: { padding: 16, flex: 1 },
})

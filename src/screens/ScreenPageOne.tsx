import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native'

import { Button, Text } from '@acme/components'

function ScreenPageOne(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text size="title">Hello</Text>
        <Button>Click Me!</Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ScreenPageOne

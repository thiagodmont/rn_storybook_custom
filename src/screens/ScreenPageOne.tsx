import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native'

import { Button, Text } from '@acme/components'

function ScreenPageOne(): JSX.Element {
  const [counter, setCounter] = useState(0)
  const isDarkMode = useColorScheme() === 'dark'

  useEffect(() => {
    setCounter(c => c + 1)
  }, [])

  const onIncrease = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.text} size="title">
          Welcome
        </Text>
        <Text style={styles.counter} size="level1">
          value: {counter}
        </Text>
        {counter > 0 && (
          <Text style={styles.counter} size="level1">
            Ohhh yes!
          </Text>
        )}
        <Button onPress={onIncrease}>Increase</Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  counter: {
    textAlign: 'center',
    marginVertical: 16,
  },
})

export default ScreenPageOne

import React, { useCallback } from 'react'
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'

type ButtonProps = {
  onPress?: () => void
  activeOpacity?: number
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#4C4C9D',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  text: {
    color: '#fff',
  },
})

export function Button({
  onPress,
  activeOpacity = 0.5,
  children,
  style,
}: ButtonProps) {
  const _style = useCallback(
    ({ pressed }: { pressed: boolean }) => [
      { opacity: pressed ? activeOpacity : 1 },
    ],
    [activeOpacity],
  )

  const onHandleInternalPress = () => {
    onPress?.()
  }

  return (
    <Pressable style={_style} onPress={onHandleInternalPress}>
      <View style={[styles.button, style]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  )
}

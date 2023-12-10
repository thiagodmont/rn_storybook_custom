import React, { useMemo } from 'react'
import { Text as RNText, StyleProp, StyleSheet, TextStyle } from 'react-native'

const fontSizeScale = {
  none: 0,
  caption: 12,
  body: 14,
  subtitle: 18,
  title: 24,
  level3: 28,
  level2: 38,
  level1: 48,
}

type FontSizeScale = keyof typeof fontSizeScale

type TextProps = {
  size?: FontSizeScale
  style?: StyleProp<TextStyle>
  children: React.ReactNode
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
})

export function Text({ size, style, children }: TextProps) {
  const _style = useMemo(
    () => [
      { fontSize: size ? fontSizeScale[size] : fontSizeScale.body },
      styles.text,
    ],
    [size],
  )

  return <RNText style={[_style, style]}>{children}</RNText>
}

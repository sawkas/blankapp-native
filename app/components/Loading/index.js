import React from 'react'
import { Animated, Easing } from 'react-native'
import LoadingSvg from '../../../assets/icons/loader.svg'

export const Loading = () => {
  const spinValue = new Animated.Value(0)

  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  ).start()

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }} >
      <LoadingSvg width={50} height={50} />
    </Animated.View>
  )
}

export default Loading

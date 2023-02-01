import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { useRoute } from '@react-navigation/native'
import AccountSvg from '../../../assets/icons/account.svg'
import FriendsSvg from '../../../assets/icons/friends.svg'
import HomeSvg from '../../../assets/icons/home.svg'
import PlusSvg from '../../../assets/icons/plus.svg'

export const NavigationIconButton = ({ onPress, icon, screen, navigation }) => {
  const route = useRoute()

  const activeIcon = route.name === screen
  const color = activeIcon ? '#fff' : '#2E2841' // color
  const size = 25
  const iconStyles = { width: size, height: size, fill: color, stroke: color }

  const iconComponent = () => {
    switch (icon) {
      case 'account': return <AccountSvg {...iconStyles}/>
      case 'friends': return <FriendsSvg {...iconStyles} />
      case 'home': return <HomeSvg {...iconStyles} />
      case 'plus': return <PlusSvg {...iconStyles} />
    }
  }

  return (
    <Pressable style={{
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: activeIcon ? 10 : 0
    }} onPress={() => navigation.navigate(screen)}>
      {iconComponent()}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  }
})

export default NavigationIconButton

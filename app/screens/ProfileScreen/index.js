
import React, { useState } from 'react'
import { useUser, removeUser } from '../../contexts/UserContext'
import { View, Text, Button, Image, StyleSheet, SafeAreaView } from 'react-native'
import NavigationContainer from '../../components/NavigationContainer'
import Auth from '../../storage/auth'
import Loading from '../../components/Loading'

function ProfileScreen ({ navigation }) {
  const [{ user }, dispatch] = useUser()
  const [isLoading, setIsLoading] = useState(false)

  const signOut = async () => {
    setIsLoading(true)
    await Auth.removeToken()
    removeUser(dispatch)
    navigation.navigate('SignIn')
  }

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#262132' }}>
        <Loading/>
      </SafeAreaView>
    )
  }

  return (
    <NavigationContainer navigation={navigation}>
      <View style={styles.profile}>
        <Text style={styles.fullName}>{user.full_name}</Text>
        <Image style={styles.avatar} source={{ uri: user.avatar_url }} />
      </View>
      <Button title="Sign out" onPress={signOut} styles={styles.signOut}/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  profile: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  fullName: {
    flex: 7,
    fontSize: 20
  },
  avatar: {
    // flex: 3,
    width: 50,
    height: 50,
    borderRadius: 50
  },
  signOut: {
    color: 'red'
  }
})

export default ProfileScreen

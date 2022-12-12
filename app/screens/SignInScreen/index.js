import React, { useContext, useEffect, useState } from 'react'
import { Button, SafeAreaView, Alert, StyleSheet, TextInput } from 'react-native';

import Client from '../../client';
import { UserContext } from '../../contexts/UserContext';
import Auth from '../../storage/auth';

function SignInScreen({ navigation }) {
  const [credentionals, setCredentionals] = useState({email: '', password: ''})
  const { setUserId } = useContext(UserContext)

  const signIn = async () => {
    const res = await Client.auth.signIn(credentionals)
    setUserId(res.headers.get('uid'))


    await Auth.setCredentials({
      'client': res.headers.get('client'),
      'expiry': res.headers.get('expiry'),
      'uid': res.headers.get('uid'),
      'accessToken': res.headers.get('access-token'),
    })

    const creds = await Auth.getCredentials()

    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setCredentionals({...credentionals, email: value})}
        value={credentionals.email}
        placeholder="Email"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setCredentionals({...credentionals, password: value})}
        value={credentionals.password}
        placeholder="Password"
        secureTextEntry={true}
        keyboardType="default"
      />
      <Button title="Sign in" onPress={signIn} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SignInScreen;

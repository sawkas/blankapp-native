import React, { useEffect } from 'react'
import { Button, View, Text, Alert } from 'react-native';

import Client from '../../client';

function DetailsScreen({ navigation }) {
  const fetchHome = async () => {
    const res = await Client.home.index()

    console.log('res.greeting', res.greeting)
    Alert.alert(res.greeting)
  }

  useEffect(() => {
    fetchHome()
  })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailsScreen;

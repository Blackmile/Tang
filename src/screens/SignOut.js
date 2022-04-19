import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../actions/firebase';
import { useNavigation } from '@react-navigation/native'; 


export default function SignOut() {
  const navigation = useNavigation()
  
  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.navigate('signn', {screen: 'SignIn'})
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
        }}
    >
      <Text style={{ color: '#3C3C3C', fontSize: 24, marginBottom: 20 }}>
         Hiii {auth.currentUser?.email}
      </Text>
      <View style={{marginTop: 20}}>
        <View style={{marginTop: 20}}>
          <TouchableOpacity>
            <Button
              title= 'Sign out'
              color='black'
              onPress={handleSignOut} 
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
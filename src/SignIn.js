import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { auth } from './actions/firebase'
import { useNavigation } from '@react-navigation/native'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                navigation.navigate('Main')
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.messeage))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('logged with ',user.email);
            })
            .catch(error => console.log(error.messeage))
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
         Log in
      </Text>
      <View style={{marginTop: 20}}>
        <TextInput 
            placeholder='email'
            value={email}
            onChangeText={setEmail} 
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 2,
                width: 200
            }}
        />
        <TextInput
            placeholder='password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} 
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 2,
                width: 200
            }}
        />
        <View style={{marginTop: 20}}>
          <TouchableOpacity>
            <Button
              title='Sign Up' 
              disabled={!password || !email}
              color='black' 
              onPress={handleSignUp} 
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 15 }}
          >
            <Button
              title='Login' 
              disabled={!password || !email}
              color='black'
              onPress={handleLogin}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignIn
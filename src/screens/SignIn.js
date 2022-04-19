import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { signIn, signUp } from '../actions/firebase';


export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mode, setMode] = useState('signUp')

  async function handlePress() {
    if (mode === 'signUP') {
      await signUp(email, password);
    }
    if (mode === 'signIn') {
      await signIn(email, password);
    }
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
          <Button
            title={mode === 'signUp' ? 'Sign Up' : 'Sign In'} 
            disabled={!password || !email}
            color='black' 
            onPress={handlePress} 
          />
        </View>
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={ () =>
             mode === 'signUp' ? setMode('signIn') : setMode('signUp')
            }
        >
          <Text style={{ color: 'black'}}>
            {mode === 'signUp'
             ? "Already have an account? Sign in"
             : "Not registered? create account"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
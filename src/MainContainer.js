import { View, Text, Button, Image } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'

import SignIn from './screens/SignIn'
import Home from './screens/Home'
import Upload from './screens/Upload';

const homeName = 'Home';
const signName = 'SignIn';
const uploadName = 'Upload';

const Tab = createMaterialTopTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={{ marginTop: 50 }}
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarLabel: ({focus, color, size}) => {
            let rn = route.name;

            if (rn === homeName) {
              return <Image source={require('../assets/logo.png')} style={{ width: 100, height: 30, resizeMode: 'contain' }} />
            } else if (rn === signName) {
              return <Button color={'black'} title='LogIn' />
            } else if (rn === uploadName) {
              return <Image source={require('../assets/upload.png')} style={{ width: 60, height: 30, resizeMode: 'contain' }}/>
            }
          }
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={uploadName} component={Upload} />
        <Tab.Screen name={signName} component={SignIn} />
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}
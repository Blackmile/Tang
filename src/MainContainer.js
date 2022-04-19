import { View, Text, Button, Image } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'

import SignOut from './screens/SignOut'
import Home from './screens/Home'
import Upload from './screens/Upload';

const homeName = 'Home';
const signName = 'SignOut';
const uploadName = 'Upload';

const Tab = createMaterialTopTabNavigator();

export default function MainContainer() {
  return (
      <Tab.Navigator
        style={{ paddingTop: 50 }}
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarLabel: ({focus, color, size}) => {
            let rn = route.name;

            if (rn === homeName) {
              return <Image source={require('../assets/logo.png')} style={{ width: 100, height: 30, resizeMode: 'contain' }} />
            } else if (rn === signName) {
              return <Button color={'black'} title='Log Out' />
            } else if (rn === uploadName) {
              return <Image source={require('../assets/upload.png')} style={{ width: 60, height: 30, resizeMode: 'contain' }}/>
            }
          }
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={uploadName} component={Upload} />
        <Tab.Screen name={signName} component={SignOut} />
        
      </Tab.Navigator>
  )
}
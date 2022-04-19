import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainContainer from './src/MainContainer'
import SignIn from './src/SignIn';

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='signn' options={{headerShown: false}} component={SignIn} />
        <Stack.Screen name='Main' options={{headerShown: false}} component={MainContainer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

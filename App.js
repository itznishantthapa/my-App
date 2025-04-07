import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import About from './src/screens/About'
import Profile from './src/screens/Profile'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppProvider } from './context/AppContext'
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'


const Stack = createStackNavigator()
const App = () => {
  return (
    <AppProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignUp' screenOptions={{headerShown:false}} >
          <Stack.Screen component={Home} name='Home'/>
          <Stack.Screen component={About} name='About'/>
          <Stack.Screen component={Profile} name='Profile'/>
          <Stack.Screen component={SignUp} name='SignUp'/>
          <Stack.Screen component={Login} name='Login'/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
    </AppProvider>

  )
}


export default App

const styles = StyleSheet.create({})
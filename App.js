import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import About from './src/screens/About'
import Profile from './src/screens/Profile'
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppProvider } from './context/AppContext'


const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <AppProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
          <Tab.Screen component={Home} name='Home'/>
          <Tab.Screen component={About} name='About'/>
          <Tab.Screen component={Profile} name='Profile'/>
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({})
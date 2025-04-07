import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AppContext } from '../../context/AppContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({navigation}) => {
  const {state, dispatch} = useContext(AppContext)

    const handleNavigation=()=>{
        navigation.navigate('About')
    }
    
     const handleUpdate=()=>{
         dispatch({type:'update',field:'name',value:'nishantthapa'})
        //  dispatch(action)
     }
  return (
    <SafeAreaView>
      <StatusBar  barStyle='light-content' backgroundColor={'black'} / >
         <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>{state?.name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
    backgroundColor:'black',
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
},
text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
},
button:{
    backgroundColor:'white',
    padding:10,
    borderRadius:5,
    marginTop:10,
}
})
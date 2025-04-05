import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AppContext } from '../../context/AppContext'

const Home = ({navigation}) => {
  const {user, setUser} = useContext(AppContext)

    const handleNavigation=()=>{
        navigation.navigate('About')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>{user}</Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text>Go to About</Text>
      </TouchableOpacity>
    </View>
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
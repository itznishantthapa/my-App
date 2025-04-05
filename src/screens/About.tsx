import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext, AppProvider } from '../../context/AppContext'

const About = ({navigation}) => {
    const {user,setUser} = useContext(AppContext);

    const handleNavigation=()=>{
        navigation.navigate('Profile')
    }
    const updateContextData=()=>{
      setUser('Updated !!!')
    }

  return (
    <View style={styles.container}>
      <Text style={{color:'#ffffff'}}>About</Text>
      <Text style={{color:'#ffffff'}}>{user}</Text>
      <TouchableOpacity style={styles.button} onPress={updateContextData}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  )
}

export default About

    const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
        marginTop:10,
    }
})
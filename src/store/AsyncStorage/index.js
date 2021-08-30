import React,{useState} from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
//import {useSelector, useDispatch} from 'react-redux';
//import styles from './style'

export default StorageAsync = () => {

  const [data, setData] = useState(null)



  //console.log(data)

  return (
    <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
      <Text>Working</Text>
    </View>
  )
} 

async function Buscar(){
  const valor = await AsyncStorage.getItem('BancoDados')
  const state = JSON.parse(valor)
  return state
  
} 

export {Buscar}
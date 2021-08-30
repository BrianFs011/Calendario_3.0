import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './style'

import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';

export default ButtonDay = ({day}) => {

  const diaryIsVisible = useSelector(state=>state.diaryIsVisible)
  const dispatch = useDispatch()
  
  //show diary went press day in calendar
  async function onIsVisible(){
    dispatch({type:'diary', switch:!diaryIsVisible});
    dispatch({type:'showDay', show: day})
    
    //load tasks went press day in calendar
    const valor = await AsyncStorage.getItem('teste')
    const state = JSON.parse(valor)
    dispatch({type:'tasks', showTasks: state})
  }

  return (
    <View>
      
      {
      day !== 0 ? 
      <TouchableOpacity style={styles.button} onPress={()=>{onIsVisible()}}>
          <Text style={styles.textButton}>{moment(day).format("D")}</Text>
      </TouchableOpacity>
      :
      <View style={styles.button}/>
      }

    </View>
  )
}
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

import styles from './style'

export default ButtonDay = ({day}) => {

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
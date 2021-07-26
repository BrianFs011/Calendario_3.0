import React from 'react'
import {TouchableOpacity,View, Text} from 'react-native'
import styles from '../styles/styles'

export default filter = (props)=>{
  const {lastMonth, nextMonth} = props

  return (
    <View style={styles.boxFilter}>
      <TouchableOpacity style={[styles.boxDayMonth, {marginRight:23}]} onPress={nextMonth}>
        <Text style={styles.textDayMonth}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxDayMonth}>
        <Text style={styles.textDayMonth}>{}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxDayMonth} onPress={lastMonth}>
        <Text style={styles.textDayMonth}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
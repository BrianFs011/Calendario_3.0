import React, {useState} from 'react'
import {TouchableOpacity,Text,View} from 'react-native'

import styles from '../styles/styles'
import config from './initialConfig'

const Calendar = (props)=>{

  const {day, dayweek} = props

  return (
    
    <View>

      {config.check == false 
        ?
          <View style={{flexDirection:'row'}}>      
            {dayweek == 'Sun'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Mon'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Tue'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Wed'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Thu'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Fri'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Sat'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
          </View>
        :
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text></TouchableOpacity>
          </View>
      }

    </View>
  )
}

const DayWeek = ()=>{
  return (
    
    <View style={{flexDirection:'row', marginBottom:10}}>
      
      <View style={styles.boxDayMonth}>
        <Text style={styles.textDayMonth}>DOM</Text>
      </View>

      <View style={styles.boxDayMonth}>
        <Text style={styles.textDayMonth}>SEG</Text>
      </View>

      <View style={styles.boxDayMonth}>
        <Text style={styles.textDayMonth}>TER</Text>
      </View>

      <View style={styles.boxDayMonth}>
        <Text style={styles.textDayMonth}>QUA</Text>
      </View>

      <View style={styles.boxDayMonth}>
        <Text style={styles.textDayMonth}>QUI</Text>
      </View>

      <View style={styles.boxDayMonth}>
        <Text style={styles.textDayMonth}>SEX</Text>
      </View>

      <View style={styles.boxDayMonth}>
        <Text style={styles.textDayMonth}>SÁB</Text>
      </View>

    </View>

  )
}

const RodaPe = ()=>{return <View style={styles.boxDayMonth}/>}

export {Calendar, DayWeek, RodaPe}
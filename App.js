import React, {useState}            from 'react'
import {View,Text,ImageBackground} from 'react-native'
import moment           from 'moment'

import {DayWeek}                  from './src/calendar/dayOfMonth'
import Structure,{Baseboard}      from './src/calendar/structure'
import Filter                     from './src/calendar/filter'
import config                     from './src/calendar/initialConfig'
import styles                     from './src/styles/styles'

const initialDate = new Date()

const initialDay  = initialDate.getDate() - (initialDate.getDate()-1)
let initialMonth  = initialDate.getMonth()
const initialYear = initialDate.getFullYear()

export default ()=>{
  
  const date = new Date(initialYear,initialMonth,initialDay)

  const [dates,setDates] = useState(Structure(initialYear,initialMonth,initialDay))

  function nextMonth(){
    config.check = false
    initialMonth += 1
    setDates(Structure(initialYear,initialMonth,initialDay))
  }
  
  function lastMonth(){
    config.check = false
    initialMonth -= 1
    setDates(Structure(initialYear,initialMonth,initialDay))
  }
  
  return (

    <ImageBackground source={require('./img/background.jpg') }style={styles.background}>
    
      <View style={styles.container}>
        
        <View style={styles.title}>
          <Text style={styles.textTitle}>{moment(date).format('MMMM YYYY')}</Text>
        </View>

        <Filter nextMonth={()=>nextMonth()} lastMonth={()=>lastMonth()}/>
        
        <View style={styles.appCalendar}>
          <DayWeek/>
          {dates}
          {Baseboard(dates[dates.length-1])}
        </View>

      </View>
     
    </ImageBackground>
  )
}
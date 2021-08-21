/* import React from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';

//import styles from './style']

import store from './store'
import Teste from './components/teste/index';

export default App = () => {
  return (
    <Provider store={store}>
      <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
        <Teste></Teste>
      </View>
    </Provider>
  )
} */

import React, {useState}            from 'react'
import {View,Text,ImageBackground} from 'react-native'
import moment           from 'moment'

import styles from './components/buttonDay/style'

import Calendar,{DayWeek, Title, Filter} from './pages/calendar/index'

const initialMonth = new Date()

export default ()=>{
  
  const [month, setMonth] = useState(initialMonth.getMonth())

  function lastMonth(){
    setMonth(month - 1)
  }
  function nextMonth(){
    setMonth(month + 1)
  }

  const date = new Date(initialMonth.getFullYear(), month, initialMonth.getDate());

  return (

    <ImageBackground source={require('./assets/background/background.jpg')}  style={{flex: 1}}>
    
      <View >
        
        <Title initDate={date}/>
        <Filter lastMonth={lastMonth} nextMonth={nextMonth}/>
        <DayWeek/>
        <Calendar initialMonth={date}/>
        
      </View>
     
    </ImageBackground>
  )
} 
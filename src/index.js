import React, {useState} from 'react';
import {ImageBackground} from 'react-native';

import {Provider} from 'react-redux';

import store from './store/redux/index';

import Calendar,{DayWeek, Title, Filter, Diary} from './pages/calendar/index';

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
      <Provider store={store}>
        
          <Title initDate={date}/>
          <Filter lastMonth={lastMonth} nextMonth={nextMonth}/>
          <DayWeek/>
          <Calendar initialMonth={date}/>
          
          <Diary initialMonth={date}/> 
        
      </Provider>
    </ImageBackground>
  )
} 
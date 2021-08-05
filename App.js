import React, {useState, useEffect}                        from 'react'
import {View,Text,ImageBackground,Modal, TouchableOpacity} from 'react-native'
import { GestureHandlerRootView }                          from "react-native-gesture-handler";
import moment                                              from 'moment'

import {DayWeek, Calendar}         from './src/calendar/dayOfMonth'
import Structure,{Baseboard}      from './src/calendar/structure'
import Filter                     from './src/calendar/filter'
import NewTask                    from './src/calendar/newTask';
import config                     from './src/calendar/initialConfig'
import styles                     from './src/styles/styles'

import {component} from './src/calendar/bancoDados'
import IsVisible from './src/calendar/isVisible';

const initialDate = new Date()

const initialDay  = initialDate.getDate() - (initialDate.getDate()-1)
let initialMonth  = initialDate.getMonth()
const initialYear = initialDate.getFullYear()

export default ()=>{
  
  const date = new Date(initialYear,initialMonth,initialDay)

  const [dates,setDates] = useState(Structure(initialYear,initialMonth,initialDay))
  const [isVisible, setIsVisible] = useState(config.isVisible)
  const [taskIsVisible, setTaskIsVisible] = useState(false)
  
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

  function onIsVisible(){
    setIsVisible(!isVisible)
  }

  function onNewTaskIsVisible(props){
    setTaskIsVisible(props)
  }

  return (

    <ImageBackground source={require('./img/background.jpg') }style={styles.background}>

      <Modal transparent={true} visible={<IsVisible />}  animationType='fade' > 

        <GestureHandlerRootView style={{flex:1}}>

          <View style={{flex:1, justifyContent:'center', backgroundColor: "rgba(0,0,0,0.7)", alignItems:'center'}}>
            
            <View style={{ backgroundColor:'#ddd',borderWidth:1, borderColor:'#b9996a', borderRadius: 5, alignItems:'center'}}>
              
        
              <Text style={[styles.textTitle, {backgroundColor:'#ddd', borderBottomWidth:1, borderColor:'#b9996a', marginBottom: 10 }]}>{moment(component[0].props.day).format("D MMM YYYY")}</Text>
        
            
              <View style={{marginTop: 20, width: '100%'}}>

                {component}

                <View style={{flexDirection:'row',marginTop:20, marginBottom: 10, justifyContent: 'flex-end', marginHorizontal: "1%"}}>
                  
                  <TouchableOpacity style={[styles.boxDayMonth, {}]} onPress={()=>{onIsVisible()}}>
                    <Text style={[styles.textDayMonth, {color: '#c22525'}]}>x</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.boxDayMonth, {width: '30%'}]} onPress={()=>{onNewTaskIsVisible(!taskIsVisible)}}>
                    <Text style={[styles.textDayMonth, {color: '#4db830'}]}>NEW</Text>
                  </TouchableOpacity>
                
                </View>

            </View>
            
          </View>
            
          </View> 
        </GestureHandlerRootView>
      </Modal>

      <NewTask isVisible={taskIsVisible} cancel={onNewTaskIsVisible}/> 
    
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
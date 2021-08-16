import React, {useState, useEffect} from 'react'
import {TouchableOpacity,Text,View, Modal, FlatList} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import moment                                              from 'moment'
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/styles'
import config from './initialConfig'
import List from './list';
import NewTask from './newTask';

const Calendar = (props)=>{

  const [banco, setBanco] = useState(null)
  
  async function buscar(){
    const valor = await AsyncStorage.getItem('BancoDados')
    const state = JSON.parse(valor)
    setBanco(state)
  } 

  
const {day, dayweek, fullDay} = props
  
const [comp, setComp] = useState(false);
const component = []


function swipeableConclude(id, cond){
  banco.forEach(d=>{
    if(d.id == id){
      d.confirmation= cond
      setComp(!comp)
      AsyncStorage.setItem('BancoDados', JSON.stringify(banco))
    }
  })
}
function swipeableIncomplete(id){

  const task = banco.filter(dados=>dados.id !== id)
    setBanco(task)
    AsyncStorage.setItem('BancoDados', JSON.stringify(task))
}
 
if(banco != null){

  banco.forEach(d=>{
    
    if(moment(d.day).format('D MMM YYYY') == fullDay){
      
      component.push(
        <List 
          start={moment(d.start).format('HH:mm')}
          end={moment(d.end).format('HH:mm')}
          activity={d.activity}
          confirmation={d.confirmation}
          day={new Date()}
          key={d.id}
          id={d.id}
          swipeableConfirmation={swipeableConclude}
          swipeableIncomplete={swipeableIncomplete}>
        </List>)
      }
    })
  }

    const [isVisible, setIsVisible] = useState(false);
    const [newTaskIsVisible, setNewTaskIsVisible] = useState(false);
    
    function onIsVisible(){
      setIsVisible(!isVisible)
      //config.check = false
      buscar()
    }

    function newData(){
      
      setNewTaskIsVisible(!newTaskIsVisible)
      
    }

  
  function form(task, init, end, id){
    banco.push(  {
      day: fullDay,
      start: init,
      end: end,
      activity: task,
      confirmation: false,
      id: id
    },)

    setNewTaskIsVisible(!newTaskIsVisible);
    AsyncStorage.setItem('BancoDados', JSON.stringify(banco))
  }
  
  function cancel(){
    setNewTaskIsVisible(!newTaskIsVisible)
  }  

  return (
    
    <View>
      <NewTask isVisible={newTaskIsVisible} form={form} cancel={cancel}/>

      {config.check == false 
        ?
          <View style={{flexDirection:'row'}}>      
            {dayweek == 'Sun'?<TouchableOpacity style={styles.boxDayMonth} onPress={()=>{onIsVisible()}}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Mon'?<TouchableOpacity style={styles.boxDayMonth} onPress={()=>{onIsVisible()}}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Tue'?<TouchableOpacity style={styles.boxDayMonth} onPress={()=>{onIsVisible()}}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Wed'?<TouchableOpacity style={styles.boxDayMonth} onPress={()=>{onIsVisible()}}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Thu'?<TouchableOpacity style={styles.boxDayMonth} onPress={()=>{onIsVisible()}}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Fri'?<TouchableOpacity style={styles.boxDayMonth} onPress={()=>{onIsVisible()}}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Sat'?<TouchableOpacity style={styles.boxDayMonth} onPress={()=>{onIsVisible()}}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
          </View>
        :
          <View style={{flexDirection:'row'}}>
            
            <Modal transparent={true} visible={isVisible}  animationType='fade' > 
              <GestureHandlerRootView style={{flex:1}}>

                <View style={{flex:1, justifyContent:'center', backgroundColor: "rgba(0,0,0,0.7)", alignItems:'center'}}>
                    
                  <View style={{ backgroundColor:'#ddd',borderWidth:1, borderColor:'#b9996a', borderRadius: 5, alignItems:'center'}}>
                    
                    <Text style={[styles.textTitle, {backgroundColor:'#ddd', borderBottomWidth:1, borderColor:'#b9996a', marginBottom: 10 }]}>{fullDay}</Text>

                    <View style={{marginTop: 20, width: '100%'}}>

                      {component}

                      <View style={{flexDirection:'row',marginTop:20, marginBottom: 10, justifyContent: 'flex-end', marginHorizontal: "1%"}}>
                      
                        <TouchableOpacity style={[styles.boxDayMonth, {}]} onPress={()=>{onIsVisible()}}>
                          <Text style={[styles.textDayMonth, {color: '#c22525'}]}>x</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boxDayMonth, {width: '30%'}]} onPress={()=>{newData()}}>
                          <Text style={[styles.textDayMonth, {color: '#4db830'}]}>NEW</Text>
                        </TouchableOpacity>
                      
                      </View>
                    </View>
                  </View> 
                </View> 
              </GestureHandlerRootView>
            </Modal>

            <TouchableOpacity style={styles.boxDayMonth} onPress={()=>{onIsVisible()}}>
              <Text style={styles.textDayMonth}>{day}</Text>
            </TouchableOpacity>
            
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
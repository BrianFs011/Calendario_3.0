import React, {useState, useEffect} from 'react'
import {TouchableOpacity,Text,View, Modal, FlatList} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import moment                                              from 'moment'
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/styles'
import config from './initialConfig'
import List from './list';
import NewTask from './newTask';

const dados = [{
  id:1,
  day: new Date(),
  start: new Date(),
  end: new Date(),
  activity: 'correr',
  confirmation: false
},
{
  id: 2,
  day: new Date(2021,7,9),
  start: new Date(),
  end: new Date(),
  activity: 'codar',
  confirmation: false
},
{
  id: 3,
  day: new Date(2021,7,9),
  start: new Date(0,0,0,1,1,1),
  end: new Date(0,0,0,1,1,3),
  activity: 'codar',
  confirmation: false
},];



const Calendar = (props)=>{
  
  const {day, dayweek, fullDay} = props
  /*const Armazenar = (chave,valor)=>{
    AsyncStorage.setItem(chave, JSON.stringify(valor))
  }
  const [banco, setBanco] = useState(null)



const Buscar = async (chave)=>{
  const valor = await AsyncStorage.getItem(chave)
  const state = JSON.parse(valor)
  setBanco(state)
}

function bus(){
  Buscar('teste')
  d.push(banco)
}*/

const [d,setD] = useState(dados)  
const [comp, setComp] = useState(false);
const component = []


function swipeableConclude(id, cond){
  d.forEach(d=>{
    if(d.id == id){
      d.confirmation= cond
      setComp(!comp)
      //console.log(banco)
    }
  })
  //Armazenar('BancoDeDados',{d})
}
function swipeableIncomplete(id){

    const task = d.filter(dados=>dados.id !== id)
    setD(task)
  }
  
  d.forEach(d=>{
    
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
    
    
    //console.log(banco)
    

    const [isVisible, setIsVisible] = useState(false);
    const [newTaskIsVisible, setNewTaskIsVisible] = useState(false);
    
    function onIsVisible(){
      setIsVisible(!isVisible)
      //bus()
    }

    function newData(){
      
      setNewTaskIsVisible(!newTaskIsVisible)
      
    }

  
  function form(task, init, end, id){
    d.push(  {
      day: fullDay,
      start: init,
      end: end,
      activity: task,
      confirmation: false,
      id: id
    },)
    /*Armazenar('teste', {
      day: fullDay,
      start: init,
      end: end,
      activity: task,
      confirmation: false,
      id: id
    })*/
    setNewTaskIsVisible(!newTaskIsVisible);
    
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
import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';

import styles from './style'

import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App({task}) {
  
  const tas = [0,0,0,0];
  
  task.map(task=>{
    tas[0]=task.start;
    tas[1]=task.end
    tas[2]=task.activity
    tas[3]=task.confirmation
  })
    
  const [text, setText] = useState(tas[2])
  const [initDate, setInitDate] = useState(new Date(tas[0]))
  const [endDate, setEndDate] = useState(new Date(tas[1]))
  const [showInit, setShowInit] = useState(false)
  const [showEnd, setShowEnd] = useState(false)
  
  const dispatch = useDispatch()
  const editIsVisible = useSelector(state=>state.editIsVisible);
  const tasks = useSelector(state=>state.tasks);

  useEffect(()=>{
    setInitDate(new Date(tas[0]))
    setEndDate(new Date(tas[1]))
  }, task)
  
  function closeThisPage(){
    dispatch({type:'editIsVisible', editIsVisible: !editIsVisible})
  }

  function saveTask(){
    task[0].activity = text;
    task[0].select = false;
    task[0].start = initDate;
    task[0].end = endDate;
    dispatch({type: 'editIsVisible', editIsVisible:!editIsVisible});
    dispatch({type: 'cont', cont: 0});
    AsyncStorage.setItem('teste', JSON.stringify(tasks));
    console.log(tasks)
  }
  
  return (
    <Modal transparent={true} visible={editIsVisible}  animationType='fade'>
      <GestureHandlerRootView style={{flex:1}}>
      
        <Modal visible={showInit} transparent={true}>
          <DateTimePicker testID={new Date()} value={initDate} onChange={(_,date)=>{setInitDate(date), setShowInit(false)}} mode='time'/>
        </Modal>

        <Modal visible={showEnd} transparent={true}>
          <DateTimePicker testID={new Date()} value={endDate} onChange={(_,date)=>{setEndDate(date), setShowEnd(false)}} mode='time'/>
        </Modal>

        <View style={{flex: 1,justifyContent: 'center', alignItems:'center',backgroundColor:'rgba(0,0,0,0.4)'}}>
          <View style={{width:'100%', backgroundColor:'#ddd',borderWidth:1, borderColor:'#b9996a', borderRadius: 5,paddingBottom: 20}}>
            
            <Text style={[styles.textFont, {fontSize: 40, textAlign: 'center', marginTop: 20, marginBottom: 20}]}>Editar</Text>

            <Text style={[styles.textFont, {marginLeft:10,}]}>Tarefa</Text>
            <TextInput value={text} onChangeText={(text)=>setText(text)} placeholder='...' placeholderTextColor='#b9996a' style={[styles.textInput, {marginTop:10}]} />

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={[styles.button, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>setShowInit(true)}>
                <Text style={styles.textFont}>{initDate == undefined ? "Inicio": moment(initDate).format('HH:mm')}</Text>
                
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>setShowEnd(true)}>
                <Text style={styles.textFont}>{endDate == undefined ? "Fim": moment(endDate).format('HH:mm')}</Text>
                
              </TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop: 20, marginRight: 10}}>
              <TouchableOpacity style={[styles.button, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>closeThisPage()}>
                <Text style={[styles.textFont, {color: '#c22525', fontWeight:'bold'}]}>X</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>saveTask()}>
                <Text style={[styles.textFont, {color: '#4db830', fontWeight:'bold'}]}>SAVE</Text>
              </TouchableOpacity>
            </View>

         
        </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  )
}
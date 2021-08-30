import React,{useState} from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './style'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function NewTask({form}){

  const [text, setText] = useState()
  const [initDate, setInitDate] = useState()
  const [endDate, setEndDate] = useState()
  const [showInit, setShowInit] = useState(false)
  const [showEnd, setShowEnd] = useState(false)
  

  const newTaskIsVisible = useSelector(state=>state.newTaskIsVisible);
  const dispatch = useDispatch();
  
  function closeThisPage(){
    dispatch({type:"newTask", switch: !newTaskIsVisible})
  }
  
  function saveTask (){
    form(text, initDate, endDate, new Date(), false)
    setText()
    setInitDate()
    setEndDate()
    dispatch({type:"newTask", switch: !newTaskIsVisible})
  }

  //console.log(newTaskIsVisible);


  return (
    <Modal transparent={true} visible={newTaskIsVisible}  animationType='fade'>
      <GestureHandlerRootView style={{flex:1}}>
      
        <Modal visible={showInit} transparent={true}>
          <DateTimePicker testID={new Date()} value={new Date()} onChange={(_,date)=>{setInitDate(date), setShowInit(false)}} mode='time'/>
        </Modal>

        <Modal visible={showEnd} transparent={true}>
          <DateTimePicker testID={new Date()} value={new Date()} onChange={(_,date)=>{setEndDate(date), setShowEnd(false)}} mode='time'/>
        </Modal>

        <View style={{flex: 1,justifyContent: 'center', alignItems:'center',backgroundColor:'rgba(0,0,0,0.4)'}}>
          <View style={{width:'100%', backgroundColor:'#ddd',borderWidth:1, borderColor:'#b9996a', borderRadius: 5,paddingBottom: 20}}>
            
            <Text style={[styles.textFont, {fontSize: 40, textAlign: 'center', marginTop: 20, marginBottom: 20}]}>Novo</Text>

            <Text style={[styles.textFont, {marginLeft:10,}]}>Tarefa</Text>
            <TextInput value={text} onChangeText={(text)=>setText(text)} placeholder='...' placeholderTextColor='#b9996a' style={[styles.textInput, {marginTop:10}]} />

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>setShowInit(true)}>
                <Text style={styles.textFont}>{initDate == undefined ? "Inicio": moment(initDate).format('HH:mm')}</Text>
                
              </TouchableOpacity>

              <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>setShowEnd(true)}>
                <Text style={styles.textFont}>{endDate == undefined ? "Fim": moment(endDate).format('HH:mm')}</Text>
                
              </TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop: 20, marginRight: 10}}>
              <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>closeThisPage()}>
                <Text style={[styles.textFont, {color: '#c22525', fontWeight:'bold'}]}>X</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>saveTask()}>
                <Text style={[styles.textFont, {color: '#4db830', fontWeight:'bold'}]}>SAVE</Text>
              </TouchableOpacity>
            </View>

         
        </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  )
} 
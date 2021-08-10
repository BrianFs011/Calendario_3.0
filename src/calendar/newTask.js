import React,{useState} from 'react';
import {View, Text, Modal, TextInput, TouchableOpacity, Platform} from 'react-native';
import styles from '../styles/stylesList';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import moment from 'moment';

import DateTimePicker from '@react-native-community/datetimepicker';


export default (props)=>{

  const {isVisible, form, cancel} = props

  const [text, setText] = useState()
  const [initDate, setInitDate] = useState()
  const [endDate, setEndDate] = useState()
  const [showInit, setShowInit] = useState(false)
  const [showEnd, setShowEnd] = useState(false)

  function saveTask (){
    form(text, initDate, endDate, new Date())
    setText()
    setInitDate()
    setEndDate()
  }
  
  if(showInit == true){
    return <DateTimePicker testID={new Date()} value={new Date()} onChange={(_,date)=>{setInitDate(date), setShowInit(false)}} mode='time'/>
  }
  
  if(showEnd == true){
    return(
      <View style={styles.conteiner}>
        <DateTimePicker testID={new Date()} value={new Date()} onChange={(_,date)=>{setEndDate(date), setShowEnd(false)}} mode='time'/>
      </View>
    ) 
  }
  
  return(
    <Modal transparent={true} visible={isVisible}  animationType='fade'>
      <GestureHandlerRootView style={{flex:1}}>
        <View style={{flex: 1,justifyContent: 'center', alignItems:'center',backgroundColor:'rgba(0,0,0,0.4)'}}>
          <View style={{width:'100%', backgroundColor:'#ddd',borderWidth:1, borderColor:'#b9996a', borderRadius: 5,paddingBottom: 20}}>
            
            <Text style={[styles.textReadActivity, {fontSize: 40, textAlign: 'center', marginTop: 20, marginBottom: 20}]}>Novo</Text>

            <Text style={[styles.textReadActivity, {marginLeft:10,}]}>Tarefa</Text>
            <TextInput value={text} onChangeText={(text)=>setText(text)} placeholder='...' placeholderTextColor='#b9996a' style={[styles.textInput, {marginTop:10}]} />

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>setShowInit(true)}>
                <Text style={styles.textReadActivity}>{initDate == undefined ? "Inicio": moment(initDate).format('HH:mm')}</Text>
                
              </TouchableOpacity>

              <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>setShowEnd(true)}>
                <Text style={styles.textReadActivity}>{endDate == undefined ? "Fim": moment(endDate).format('HH:mm')}</Text>
                
              </TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop: 20, marginRight: 10}}>
              <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>cancel()}>
                <Text style={[styles.textReadActivity, {color: '#c22525', fontWeight:'bold'}]}>X</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>saveTask()}>
                <Text style={[styles.textReadActivity, {color: '#4db830', fontWeight:'bold'}]}>SAVE</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  )
}
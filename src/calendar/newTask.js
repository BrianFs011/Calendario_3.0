import React,{useState} from 'react';
import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/stylesList';
import {dados, save, component} from './bancoDados'

export default (props)=>{

  const {isVisible, cancel} = props

  const [text, setText] = useState('s')
  
  save.activity = text
  
  function saveTask(){
    if(text == undefined){
      console.log('vazio')
    }
    else{
      dados.push(  {
        day: new Date(3),
        start: new Date(),
        end: new Date(),
        activity: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        confirmation: true
      },)
      console.log(dados)
      console.log(component)
      cancel(!isVisible)
    }
  }

  return(
    <Modal transparent={true} visible={isVisible}  animationType='fade'>
      <View style={{flex: 1,justifyContent: 'center', alignItems:'center',backgroundColor:'rgba(0,0,0,0.4)'}}>
        <View style={{width:'100%', backgroundColor:'#ddd',borderWidth:1, borderColor:'#b9996a', borderRadius: 5,paddingBottom: 20}}>
          

          <Text style={[styles.textReadActivity, {fontSize: 40, textAlign: 'center', marginTop: 20, marginBottom: 20}]}>Novo</Text>

          <Text style={[styles.textReadActivity, {marginLeft:10,}]}>Tarefa</Text>
          <TextInput value={text} onChangeText={(text)=>setText(text)} placeholder='...' placeholderTextColor='#b9996a' style={[styles.textInput, {marginTop:10}]} />

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]}>
              <Text style={styles.textReadActivity}>Inicio</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]}>
              <Text style={styles.textReadActivity}>Fim</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop: 20, marginRight: 10}}>
            <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>cancel()}>
              <Text style={[styles.textReadActivity, {color: '#c22525'}]}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '20%', alignItems: 'center'}]} onPress={()=>saveTask()}>
              <Text style={[styles.textReadActivity, {color: '#4db830'}]}>SAVE</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  )
}
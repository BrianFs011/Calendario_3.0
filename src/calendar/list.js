import React,{useState} from 'react'
import {View, Text, Touchable, TouchableOpacity, Modal} from 'react-native'
import stylesList from '../styles/stylesList'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../styles/stylesList'

export default (props)=>{

  const {start, end, activity, confirmation, swipeableConfirmation, id, swipeableIncomplete} = props

  const [isVisible,setIsVisible]=useState(false)

  const getRightContent = ()=> {
    
    return(
      <View style={[{justifyContent:'flex-end', alignItems:'center',paddingRight: 10, backgroundColor: '#b5b5b5',flexDirection:'row',flex:1}]}>
        <Text style={{color: '#666', fontSize: 20, marginRight: 10 }}>Desfazer</Text>
        <Icon name='undo' size={20}/>
      </View>
    )
  }

  const getLeftContent = ()=> {
    
    return(
      <View style={{flex:1, justifyContent:'flex-start', alignItems:'center',paddingLeft: 10, backgroundColor: '#cff0c5', flexDirection:'row'}}>
        <Icon name='check-circle' size={20}/>
        <Text style={{color: '#4db830', fontSize: 20, marginLeft: 10 }}>Concluído</Text>
      </View>
    )
  }

  const alert = (props)=>{
    if (props == true){
      setIsVisible(!isVisible)
      swipeableIncomplete(id,true)
    } 
    else{
      setIsVisible(!isVisible)
    }
  }

  const boxStyleConfirmation = []
  const textStyleConfirmation = []
  if (confirmation == true) {
    boxStyleConfirmation.push({backgroundColor: '#cff0c5'});
    textStyleConfirmation.push({textDecorationLine: 'line-through'})
  }

  return (
    <Swipeable onSwipeableClose={()=> swipeableConfirmation(id,false)} renderLeftActions={getLeftContent} onSwipeableLeftOpen={()=> swipeableConfirmation(id, true)} >

        <Modal visible={isVisible} transparent={true} >

          <View style={{flex:1, alignItems:'center',justifyContent:'center', backgroundColor:'rgba(0,0,0,0.4)'}}>

            <View style={[styles.window,{height:'30%', width:'80%', alignItems:'center',justifyContent:'center'}]}>
              <Text style={[styles.textReadActivity, {fontSize: 40}]}>Excluir</Text>
              <Text style={[styles.textReadActivity, {marginTop:30}]}>Deseja Excluir essa Tarefa?</Text>
              
              <View style={{flexDirection:'row', marginTop:20}}>

                <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '30%', alignItems: 'center'}]} onPress={()=>alert(false)}>
                  <Text style={[styles.textReadActivity,{color: '#c22525'}]}>Não</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.window, {marginTop: 20, marginLeft: 10, width: '30%', alignItems: 'center'}]} onPress={()=>alert(true)}>
                  <Text style={[styles.textReadActivity, {color: '#4db830'}]}>Sim</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </Modal>
      
      <TouchableOpacity onLongPress={()=>setIsVisible(!isVisible)} style={stylesList.conteiner}>

        <View style={[stylesList.boxReadActivity,boxStyleConfirmation]}>
          <Text style={[stylesList.textReadActivity, textStyleConfirmation]}>{start}</Text>
        </View>
        <View style={[stylesList.boxReadActivity,boxStyleConfirmation]}>
          <Text style={[stylesList.textReadActivity, textStyleConfirmation]}>{end}</Text>
        </View>
        <View style={[stylesList.boxReadActivity,boxStyleConfirmation, stylesList.width]}>
          <Text style={[stylesList.textReadActivity, textStyleConfirmation]}>{activity}</Text>
        </View>
        
      </TouchableOpacity>
    
    </Swipeable>
  )
}
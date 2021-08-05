import React, {useState} from 'react'
import {View, Text} from 'react-native'
import stylesList from '../styles/stylesList'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'


export default (props)=>{
  
  const {start, end, activity, confirmation} = props

  const getRightContent = ()=> {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'flex-end',paddingRight: 10, backgroundColor: '#ffb8b8'}}>
        <Icon name='trash' size={20}/>
      </View>
    )
  }

  const getLeftContent = ()=> {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'flex-start',paddingLeft: 10, backgroundColor: '#cff0c5'}}>
        <Icon name='check-circle' size={20}/>
      </View>
    )
  }

  const boxStyleConfirmation = []
  const textStyleConfirmation = []
  if (confirmation == true) {
    boxStyleConfirmation.push({backgroundColor: '#cff0c5'});
    textStyleConfirmation.push({textDecorationLine: 'line-through'})
  }

  return (
    <Swipeable renderLeftActions={getLeftContent} renderRightActions={getRightContent} >

      <View style={stylesList.conteiner}>

        <View style={[stylesList.boxReadActivity,boxStyleConfirmation]}>
          <Text style={[stylesList.textReadActivity, textStyleConfirmation]}>{start}</Text>
        </View>
        <View style={[stylesList.boxReadActivity,boxStyleConfirmation]}>
          <Text style={[stylesList.textReadActivity, textStyleConfirmation]}>{end}</Text>
        </View>
        <View style={[stylesList.boxReadActivity,boxStyleConfirmation, stylesList.width]}>
          <Text style={[stylesList.textReadActivity, textStyleConfirmation]}>{activity}</Text>
        </View>
        
      </View>
    
    </Swipeable>
  )
}
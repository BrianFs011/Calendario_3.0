import React,{useEffect, useState} from 'react';
import {View, Text, Touchable, TouchableOpacity, Modal} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import styles from './style'
import AsyncStorage from '@react-native-community/async-storage';

export default Tasck = ({swipeableConfirmation, complet} ) => {
  
  const dispatch = useDispatch();

  const select = useSelector(state=>state.select);
  const cont = useSelector(state=>state.cont);
  const tasks = useSelector(state=>state.tasks);

  const getLeftContent = ()=> {
    return(
      <View style={{flex:1, justifyContent:'flex-start', alignItems:'center',paddingLeft: 10, backgroundColor: '#cff0c5', flexDirection:'row'}}>
        <Icon name='check-circle' size={20}/>
        <Text style={{color: '#4db830', fontSize: 20, marginLeft: 10 }}>Concluído</Text>
      </View>
    )
  }

  function onSelect(idd){
    tasks.filter(task=>task.id == idd ? task.select = !task.select : null )
    dispatch({type: 'select', select: select})

    if(complet.select == true){
      dispatch({type: 'cont', cont: cont+1})
    }
    else{
      dispatch({type: 'cont', cont: cont-1})
    }
  }

  const boxStyleConfirmation = []
  const textStyleConfirmation = []
  const selectTaskColor = []
  if (complet.confirmation == true) {
    boxStyleConfirmation.push({backgroundColor: '#cff0c5'});
    textStyleConfirmation.push({textDecorationLine: 'line-through'})
  }
  if (complet.select == true){
    selectTaskColor.push({backgroundColor:'#bababa'})
  }

  return (
    <Swipeable key={Math.random()} onSwipeableClose={()=> swipeableConfirmation(complet.id,false)} renderLeftActions={getLeftContent} onSwipeableLeftOpen={()=> swipeableConfirmation(complet.id, true)} >
      <TouchableOpacity onLongPress={()=>onSelect(complet.id)} style={styles.conteiner}>
          <View style={[styles.boxReadActivity,boxStyleConfirmation, selectTaskColor]}>
            <Text style={[styles.textReadActivity, textStyleConfirmation]}>{moment(complet.start).format("HH:mm")}</Text>
          </View>
          <View style={[styles.boxReadActivity,boxStyleConfirmation, selectTaskColor]}>
            <Text style={[styles.textReadActivity, textStyleConfirmation]}>{moment(complet.end).format("HH:mm")}</Text>
          </View>
          <View style={[styles.boxReadActivity,boxStyleConfirmation, styles.width, selectTaskColor]}>
            <Text style={[styles.textReadActivity, textStyleConfirmation]}>{complet.activity}</Text>
          </View>
    </TouchableOpacity>
  </Swipeable>
  )
}
import React, {useState} from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';

import moment from 'moment'; 
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Edit from '../edit/index';
import NewTask from '../../pages/newTask/index';
import TasksButton from '../../components/buttonTasck/index'

import styles from './style'

export default ({fullDay, tasks}) => {

  //atualiza painel de tasks
  const [atualizar, setAtualizar] = useState();

  //state global
  const dispatch = useDispatch();
  const diaryIsVisible = useSelector(state=>state.diaryIsVisible);
  const newTaskIsVisible = useSelector(state=>state.newTaskIsVisible);
  
  //use state
  const cont = useSelector(state=>state.cont);
  const task = useSelector(state=>state.tasks);
  const edit = useSelector(state=>state.edit);
  const editIsVisible = useSelector(state=>state.editIsVisible);

  //abre e fecha apresentação das tasks
  function openAndCloseDiary(){
    dispatch({type:"diary", switch: !diaryIsVisible})
    dispatch({type:"cont", cont: 0})
  }
  
  //abre a page de novas tasks
  function openFormNewTask(){
    dispatch({type:"newTask", switch: !newTaskIsVisible})
  }

  //adiciana novas tasks
  function form(activity, start, end, id, select){
      tasks.push({
      day: fullDay,
      start,
      end,
      activity,
      confirmation: false,
      id,
      select
    })
    AsyncStorage.setItem('teste', JSON.stringify(tasks))
  }

  //cria tasks pre definididas para teste
  function preencher(){
      tasks.push({
      day: new Date(2021, 7, 31),
      start: new Date(2021, 7, 31, 11, 10),
      end: new Date(2021, 7, 31, 11, 40),
      activity: "Nasci",
      confirmation: false,
      id :Math.random(),
      select : false
    },)
      tasks.push({
        day: new Date(2021, 7, 31),
        start: new Date(2021, 7, 31, 11, 10),
        end: new Date(2021, 7, 31, 11, 40),
        activity: "node",
        confirmation: false,
        id :Math.random(),
        select : false
    },)
      tasks.push({
        day: new Date(2021, 7, 31),
        start: new Date(2021, 7, 31, 11, 10),
        end: new Date(2021, 7, 31, 11, 40),
        activity: "react",
        confirmation: false,
        id :Math.random(),
        select : false
    },)
      tasks.push({
        day: new Date(2021, 7, 31),
        start: new Date(2021, 7, 31, 11, 10),
        end: new Date(2004, 7, 24, 11, 40),
        activity: "react-native",
        confirmation: false,
        id :Math.random(),
        select : false
    },)
      tasks.push({
        day: new Date(2021, 7, 31),
        start: new Date(2021, 7, 31, 11, 10),
        end: new Date(2004, 7, 24, 11, 40),
        activity: "react-native",
        confirmation: false,
        id :Math.random(),
        select : false
    },)
      tasks.push({
        day: new Date(2021, 7, 31),
        start: new Date(2021, 7, 31, 11, 10),
        end: new Date(2004, 7, 24, 11, 40),
        activity: "react-native",
        confirmation: false,
        id :Math.random(),
        select : false
    },)
      tasks.push({
        day: new Date(2021, 7, 31),
        start: new Date(2021, 7, 31, 11, 10),
        end: new Date(2004, 7, 24, 11, 40),
        activity: "react-native",
        confirmation: false,
        id :Math.random(),
        select : false
    },)
      tasks.push({
        day: new Date(2021, 7, 31),
        start: new Date(2021, 7, 31, 11, 10),
        end: new Date(2004, 7, 24, 11, 40),
        activity: "react-native",
        confirmation: false,
        id :Math.random(),
        select : false
    },)
      tasks.push({
        day: new Date(2021, 7, 31),
        start: new Date(2021, 7, 31, 11, 10),
        end: new Date(2004, 7, 24, 11, 40),
        activity: "react-native",
        confirmation: false,
        id :Math.random(),
        select : false
    },)
      tasks.push({
        day: new Date(2021, 7, 31),
        start: new Date(2021, 7, 31, 11, 10),
        end: new Date(2004, 7, 24, 11, 40),
        activity: "react-native",
        confirmation: false,
        id :Math.random(),
        select : false
    },)
    //console.log(tasks)
    AsyncStorage.setItem('teste', JSON.stringify(tasks))
  }

  //confirma a task
  function swipeableConclude(id){
    const t = tasks.filter(task=>task.id == id ? task.confirmation = !task.confirmation: null);
    setAtualizar(t)
    AsyncStorage.setItem('teste', JSON.stringify(task))
  }

  //deletar a task
  function Dell(){
    const t = tasks.filter(task=>task.select !== true)
    dispatch({type:'tasks', showTasks: t})
    dispatch({type:"cont", cont: 0})
    AsyncStorage.setItem('teste', JSON.stringify(t))
  }

  //editar a task
  function onEdit(){
    if(cont == 1){
      const t = tasks.filter(task=>task.select === true);
      //console.log(t[0].activity)
      dispatch({type:'edit', edit: t})
      dispatch({type:'editIsVisible', editIsVisible: !editIsVisible})
    }
    else{
      <Text>Selecione uma tarefa por vez para ser editada</Text>
    }
  }
  
  return (
  
    <Modal transparent={true} visible={diaryIsVisible}  animationType='fade' > 
      <NewTask form={form}/>
      {editIsVisible == true ? <Edit task={edit}/> : null }
      <GestureHandlerRootView style={{flex:1}}>
        <View style={styles.conteiner}>  
      
          
          <View style={[styles.conteinerTitle, {minHeight: '30%', maxHeight: "80%"}]}> 
            
            <Text style={[styles.textTitle, {backgroundColor:'#ddd', borderBottomWidth:1, borderColor:'#b9996a', marginBottom: 10 }]}>{moment(fullDay).format("D MMM YYYY")} </Text> 

            <ScrollView >
              {tasks.map(task=>moment(task.day).format("D MMM YYYY") == moment(fullDay).format("D MMM YYYY") ? <TasksButton key={Math.random()} complet= {task} swipeableConfirmation={swipeableConclude}/>:null)}
            </ScrollView> 
         
              
                   
            {cont == 0 ?
                
                <View style={styles.conteinerButtons}>
                    
                  <TouchableOpacity style={[styles.boxDayMonth, {width:'40%'}]} onPress={()=>preencher()}>
                    <Text style={[styles.textDayMonth, {color: '#c22525'}]}>Teste</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.boxDayMonth]} onPress={()=>openAndCloseDiary()}>
                    <Text style={[styles.textDayMonth, {color: '#c22525'}]}>x</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.boxDayMonth, {width: '40%'}]} onPress={()=>openFormNewTask()}>
                    <Text style={[styles.textDayMonth, {color: '#4db830'}]}>NEW</Text>
                  </TouchableOpacity> 

                </View>
              :
                <View style={styles.conteinerButtons}>

                  <TouchableOpacity style={[styles.boxDayMonth]} onPress={()=>Dell()}>
                    <Icon name='trash' size={30} color='#c22525'/>                      
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.boxDayMonth]} onPress={()=>onEdit()}>
                    <Icon name='edit' size={30} color='#ff8c00'/> 
                  </TouchableOpacity> 
                
                  <TouchableOpacity style={[styles.boxDayMonth]} onPress={()=>openFormNewTask()}>
                    <Icon name='plus' size={30} color='#4db830'/> 
                  </TouchableOpacity>

                </View>
            }
          </View>
        </View> 
      </GestureHandlerRootView>
    </Modal>
  )
} 
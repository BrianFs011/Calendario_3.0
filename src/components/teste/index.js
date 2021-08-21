import React from 'react';
import { View, Text, Button } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

//import styles from './style'

export default App = () => {

  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addCourse(){
    dispatch({type:"addCourse", title:"c++"})
  }

  return (
    <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
      {courses.map(course=><Text key={course}>{course}</Text>)}
      <Button title="new" onPress={addCourse} ></Button>
    </View>
  )
}
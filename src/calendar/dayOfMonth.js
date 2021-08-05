import React, {useState} from 'react'
import {TouchableOpacity,Text,View, Modal} from 'react-native'
import { GestureHandlerRootView }                          from "react-native-gesture-handler";
import moment                                              from 'moment'
import {component} from "./bancoDados"

import styles from '../styles/styles'
import config from './initialConfig'

const Calendar = (props)=>{

  const {day, dayweek} = props

  const [isVisible, setIsVisible] = useState(false);

  function onIsVisible(){
    setIsVisible(!isVisible)
  }

  return (
    
    <View>

      {config.check == false 
        ?
          <View style={{flexDirection:'row'}}>      
            {dayweek == 'Sun'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Mon'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Tue'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Wed'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Thu'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Fri'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
            {dayweek == 'Sat'?<TouchableOpacity style={styles.boxDayMonth}><Text style={styles.textDayMonth}>{day}</Text>{config.check=true}</TouchableOpacity>: config.check == false ? <View style={styles.boxDayMonth}/> : null}
          </View>
        :
          <View style={{flexDirection:'row'}}>
            
            <Modal transparent={true} visible={isVisible}  animationType='fade' > 
              <GestureHandlerRootView style={{flex:1}}>

                <View style={{flex:1, justifyContent:'center', backgroundColor: "rgba(0,0,0,0.7)", alignItems:'center'}}>
                    
                  <View style={{ backgroundColor:'#ddd',borderWidth:1, borderColor:'#b9996a', borderRadius: 5, alignItems:'center'}}>
                    
                    <Text style={[styles.textTitle, {backgroundColor:'#ddd', borderBottomWidth:1, borderColor:'#b9996a', marginBottom: 10 }]}>{moment(component[0].props.day).format("D MMM YYYY")}</Text>

                    <View style={{marginTop: 20, width: '100%'}}>

                      {component}

                      <View style={{flexDirection:'row',marginTop:20, marginBottom: 10, justifyContent: 'flex-end', marginHorizontal: "1%"}}>
                      
                        <TouchableOpacity style={[styles.boxDayMonth, {}]} onPress={()=>{onIsVisible()}}>
                          <Text style={[styles.textDayMonth, {color: '#c22525'}]}>x</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boxDayMonth, {width: '30%'}]} onPress={()=>{onNewTaskIsVisible(!taskIsVisible)}}>
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
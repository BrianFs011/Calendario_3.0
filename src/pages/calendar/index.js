import React, {useState} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import style from './style';
import ButtonDay from '../../components/buttonDay/index';
import moment from 'moment';

const Title = ({initDate})=>{
  return(
    <View style={style.conteinerTitle}>
      {
      initDate.getMonth() == (new Date()).getMonth() && initDate.getYear() == (new Date()).getYear()? 
        <Text style={style.title}>{moment(initDate).format("D MMM YYYY")}</Text>
      : 
        <Text style={style.title}>{moment(initDate).format("MMM YYYY")}</Text>
      }
    </View>
  )
}

const DayWeek = ()=>{
  return (
    
    <View style={style.conteiner}>
      
      <View style={style.button}>
        <Text style={style.textButton}>DOM</Text>
      </View>

      <View style={style.button}>
        <Text style={style.textButton}>SEG</Text>
      </View>

      <View style={style.button}>
        <Text style={style.textButton}>TER</Text>
      </View>

      <View style={style.button}>
        <Text style={style.textButton}>QUA</Text>
      </View>

      <View style={style.button}>
        <Text style={style.textButton}>QUI</Text>
      </View>

      <View style={style.button}>
        <Text style={style.textButton}>SEX</Text>
      </View>

      <View style={style.button}>
        <Text style={style.textButton}>SÁB</Text>
      </View>

    </View>

  )
}

const Filter = ({lastMonth, nextMonth})=>{

  return (
    <View style={style.conteinerFilter}>
      <TouchableOpacity style={[style.button]} onPress={nextMonth}>
        <Text style={style.textButton}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <Text style={style.textButton}>{}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={lastMonth}>
        <Text style={style.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Calendar = ({initialMonth}) => {
  const armazenar = []

  let day = initialMonth - initialMonth +1; //converte new date para o primeiro dia mes

  let cont = 0;// contador para os espaços em branco
  for(let i = 0; i< (new Date(initialMonth.getYear(), initialMonth.getMonth()+1, 0)).getDate() ; i++){
    const initDate = new Date(moment(initialMonth).format("YYYY"), initialMonth.getMonth(), day);
    if(i == 0){ //cuida dos espaços em branco do começo



      if(moment(initDate).format("ddd") == "Mon") cont ++; 
      if(moment(initDate).format("ddd") == "Tue") cont += 2; 
      if(moment(initDate).format("ddd") == "Wed") cont += 3; 
      if(moment(initDate).format("ddd") == "Thu") cont += 4; 
      if(moment(initDate).format("ddd") == "Fri") cont += 5; 
      if(moment(initDate).format("ddd") == "Sat") cont += 6;
     
      for(let j = 0; j<cont; j++){
        armazenar.push(0)
      }
      cont = 0;//zera o contador
    }
    // add data
    armazenar.push(new Date(moment(initialMonth).format("YYYY"), initialMonth.getMonth(), day++));
   
  }
  //cuida dos espaços em branco do final
  if(moment(armazenar[armazenar.length-1]).format("ddd") == "Sun") cont += 6;
  if(moment(armazenar[armazenar.length-1]).format("ddd") == "Mon") cont += 5; 
  if(moment(armazenar[armazenar.length-1]).format("ddd") == "Tue") cont += 4; 
  if(moment(armazenar[armazenar.length-1]).format("ddd") == "Wed") cont += 3; 
  if(moment(armazenar[armazenar.length-1]).format("ddd") == "Thu") cont += 2; 
  if(moment(armazenar[armazenar.length-1]).format("ddd") == "Fri") cont += 1; 

  for(let i = 0; i<cont;i++){
    armazenar.push(0)
  }

  return (
    <View style={style.conteiner}>
      {armazenar.map(days => <ButtonDay key={Math.random()} day={days}/>)}
    </View>
  )
}

export {DayWeek, Title, Filter};
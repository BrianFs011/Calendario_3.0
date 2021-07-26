import React from 'react'
import {Calendar,RodaPe} from './dayOfMonth'
import moment from 'moment'

export default (initialYear,initialMonth,initialDay)=>{
  const dates = []

  const date = new Date(initialYear,initialMonth,initialDay)
  const save = date.getMonth()

  for(let i= 0; i<36;i++){ 
    if(date.getMonth() == save){
      dates.push(<Calendar dayweek={moment(date).format('ddd')} day={moment(date).format('D')} key={date} />)
      date.setDate(date.getDate()+1)
    }
  }
  return(dates)
}

const Baseboard = (props)=>{
  const rodape = []
  let j ;

  if(props.props.dayweek == 'Sun'){
    j = 6
  }
  else if(props.props.dayweek == 'Mon'){
    j = 5
  }
  else if(props.props.dayweek == 'Tue'){
    j = 4
  }
  else if(props.props.dayweek == 'Wed'){
    j = 3
  }
  else if(props.props.dayweek == 'Thu'){
    j = 2
  }
  else if(props.props.dayweek == 'Fri'){
    j = 1
  }
  

  for(let i = 0; i<j; i++){
    rodape.push(<RodaPe key={i}/>)
  }
 
  return rodape 
}

export {Baseboard} 
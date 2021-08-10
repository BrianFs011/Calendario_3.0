import React from 'react'
import moment from 'moment'
import List from './list'

const inicialData = {
    day: new Date(),
    start: new Date(),
    end: new Date(),
    activity: '',
    confirmation: false
}

const dados = [
  {
    day: new Date(),
    start: new Date(),
    end: new Date(),
    activity: 'correr',
    confirmation: false
  },
  {
    day: new Date(3),
    start: new Date(),
    end: new Date(),
    activity: 'codar',
    confirmation: true
  },
]

const component = []

dados.forEach(d=>{
  component.push(<List 
    start={moment(d.start).format('HH:mm')}
    end={moment(d.end).format('HH:mm')}
    activity={d.activity}
    confirmation={d.confirmation}
    day={new Date()}
    key={d.day}
    ></List>)
  })
  
  const save = {...inicialData}
  console.log(dados)
export {dados, component, save}
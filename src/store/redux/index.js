import {createStore} from 'redux';

const initialState={
  diaryIsVisible: false,
  newTaskIsVisible: false,
  showDay: null,
  tasks: [],
  select: [],
  conf: [],
  cont: 0,
  edit: [],
  editIsVisible: false,
}

function visibles (state=initialState, action){
  switch(action.type){
    case "diary":
      return {...state, diaryIsVisible: action.switch}
    case "newTask":
      return {...state, newTaskIsVisible: action.switch}
    case "showDay":
      return {...state, showDay:action.show}
    case "tasks" :
      return {...state, tasks: action.showTasks}
    case "cont" :
      return {...state, cont: action.cont}
    case "edit" :
      return {...state, edit: action.edit}
    case "editIsVisible" :
      return {...state, editIsVisible: action.editIsVisible}
    case "select" :
      return {...state, select: action.select}
    case "conf" :
      return {...state, conf: action.conf}
    default:
      return state;
  }
}


const store = createStore(visibles);

export default store;
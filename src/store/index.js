import {createStore} from 'redux';

const initialState={
  data:[
    "react native",
    "reactJs",
    "nodeJs"
  ]
}

function courses (state=initialState, action){
  switch(action.type){
    case "addCourse":
      return {...state,data:[...state.data, action.title]}
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
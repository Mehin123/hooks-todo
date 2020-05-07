import {v4 as uuidv4} from 'uuid';

export  function reducer (state,action){
switch(action.type){
case "ADD":
return  [...state,{id:uuidv4(),task:action.task,complate:false}] ; 
case "DELETE":
 return   state.filter((todo)=> todo.id !== action.id);
case "TOGGLE" :
 return    state.map((todo)=>todo.id===action.id ? {...todo,complate:!todo.complate}: todo)
 case "UPDATE" :
 return     state.map((todo)=> todo.id===action.id ? {...todo,task:action.NewTask} : todo)
default :
 return state 
}


}
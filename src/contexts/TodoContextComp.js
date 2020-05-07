import React, { createContext,useReducer } from 'react';
import {reducer} from '../reducer/Todo.reducer'
export const TodosContext = createContext();
 const defaultTodos=[
   {id:1,task:"Go To farm",complate:false},
   {id:2,task:"Go To Baseball",complate:false},
 ]
export function TodosProvider(props) {
   const [todos,dispatch] =useReducer(reducer,defaultTodos)
  return (
    <TodosContext.Provider value={{todos,dispatch}}>
      {props.children}

    </TodosContext.Provider>
  );
}

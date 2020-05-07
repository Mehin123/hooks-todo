import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem';
import { TodosContext } from './contexts/TodoContextComp';


export default function TodoList() {
  const { todos } = useContext(TodosContext);
  return (
    <div>

      {todos.map((todo, i) => (
        <React.Fragment key={todo.id}>
          <TodoItem
            id={todo.id}
            task={todo.task}
            complate={todo.complate}
          />

          {i < todos.length - 1 && <Divider /> }
        </React.Fragment>
      ))}

    </div>
  );
}

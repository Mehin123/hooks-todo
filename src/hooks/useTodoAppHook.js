import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import UseLocalStorageHook from './useLocalStorageHook';

export default function useTodoAppHook(initialTodos) {
  const [todos, setTodos] = UseLocalStorageHook('todos', initialTodos);

  return {
    todos,
    AddTodo: (newTodo) => {
      setTodos([...todos, { id: uuidv4(), todo: newTodo, complate: false }]);
    },
    DeleteTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => todoId !== todo.id);
      setTodos(updatedTodos);
    },

    Toggle: (toggleId) => {
      const updatedTodos = todos.map((todo) => (toggleId === todo.id ? { ...todo, complate: !todo.complate } : todo));
      setTodos(updatedTodos);
    },
    update: (todoId, updateTodo) => {
      const updatedTodos = todos.map((todo) => (todoId === todo.id ? { ...todo, todo: updateTodo } : todo));
      setTodos(updatedTodos);
    },

  };
}

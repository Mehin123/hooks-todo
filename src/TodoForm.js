import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/TodoContextComp';

export default function TodoForm() {
  const [value, setValue, resetValue] = useInputState('');
  const { dispatch} = useContext(TodosContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:"ADD",task:value});
    resetValue();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField style={{ margin: '0 ,2rem', paddingBottom: '2rem' }} value={value} fullWidth onChange={setValue} label="Add New Todo" />
      </form>


    </div>
  );
}

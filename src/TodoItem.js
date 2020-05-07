import React, { useContext } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import useToggleState from './hooks/useToggleState';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/TodoContextComp';

export default function TodoItem({ id, task, complate }) {
  const { dispatch } = useContext(TodosContext);
  const [edit, isEditing] = useToggleState(false);
  const [value, setValue, reset] = useInputState(task);
  const handleSubmit = (e) => {
    e.preventDefault();
dispatch({type:"UPDATE", id:id, NewTask:value})
    reset();
    isEditing();
  };
  return (

    <>
      <List>
        <ListItem>
          {edit
            ? (
              <form onSubmit={handleSubmit}>
                <TextField
                  value={value}
                  autoFocus
                  style={{ marginLeft: '1rem' }}
                  onChange={setValue}
                  label="Update Todo"
                />
              </form>
            )
            : (
            <>
                <Checkbox
                  onClick={() => dispatch({type:"TOGGLE", id:id})}
                  color="primary"
                  checked={complate}
                />
                <ListItemText style={{ textDecoration: complate ? 'line-through' : 'none' }}>
                  {' '}
                  {task}
                </ListItemText>
              
             
          <ListItemSecondaryAction>
            <ListItemIcon>
              {' '}
              <EditTwoToneIcon onClick={isEditing} />
            </ListItemIcon>
            <ListItemIcon>
              {' '}
              <DeleteTwoToneIcon onClick={() => dispatch({type:"DELETE",id:id})} />
            </ListItemIcon>
          </ListItemSecondaryAction>
        </>
            )}
        </ListItem>
      </List>
    <Divider style={{ marginLeft: '1rem' }} />
      </>
    
   
  );
}

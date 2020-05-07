import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodosProvider } from './contexts/TodoContextComp';

export default function TodoApp() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            TODO App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" style={{ backgroundColor: '#eeeeee', marginTop: '2rem' }}>
        <TodosProvider>
          <TodoForm />
          <TodoList />
        </TodosProvider>
      </Container>


    </div>
  );
}

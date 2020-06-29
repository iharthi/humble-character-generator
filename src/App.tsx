import React from 'react';
import './App.css';
import Roll from './components/roll';
import { Container, CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md" className={classes.paper}>
      <CssBaseline />
      <Roll />
    </Container>
  );
}

export default App;

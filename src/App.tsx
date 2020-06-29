import React from 'react';
import './App.css';
import Roll from './components/roll';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    secondary: green,
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Roll />
    </ThemeProvider>
  );
}

export default App;

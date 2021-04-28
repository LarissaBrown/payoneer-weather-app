import React from 'react'
import Grid from '@material-ui/core/Grid';
import './App.css'
import Loading from "./screens/Loading"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue, brown} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
     
      main: blue[500],
    },
    secondary: {
     
      main: brown[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Button color="primary">LightTheme</Button>
        <Button color="secondary" >DarkTheme</Button>
    <Grid container className="App">
      <Loading/>
    </Grid>
    </ThemeProvider>
  );
}

export default App;

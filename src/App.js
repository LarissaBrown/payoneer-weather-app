import React from 'react'
import Grid from '@material-ui/core/Grid';
import './App.scss'
import Loading from "./screens/Loading"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue, brown} from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: {
     
      main: brown[100],
    },
    secondary: {
      main: blue[500]
      ,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        {/* <Button className="theme-button" color="primary">LightTheme</Button>
        <Button className="theme-button" color="secondary" >DarkTheme</Button> */}
    <Grid container className="App">
      <Loading/>
    </Grid>
    </ThemeProvider>
  );
}

export default App;

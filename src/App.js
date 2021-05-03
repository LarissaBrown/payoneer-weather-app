import React, {useReducer, useEffect, useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import './App.scss'
import Loading from "./screens/Loading"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue, brown} from '@material-ui/core/colors';
import WeatherInfo from "./screens/WeatherInfo";
import Context from "./state/context"
import { CarouselItemsReducer, ToggleReducer } from './state/reducer'






const App = () => {

  const { initialState } = useContext(Context);
  const [{  
    carouselWeatherItems, isHidden, isTempChecked
  }, dispatch
  ] = useReducer(
  CarouselItemsReducer,
  ToggleReducer,
  initialState
  );

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


  return (
    <Context.Provider 
    value={{carouselWeatherItems, isHidden, isTempChecked, dispatch}}>
    <ThemeProvider theme={theme}>
   
      <audio style={{position: "absolute",top: 0, }}controls="controls">
          <source src="https://ia800101.us.archive.org/35/items/78_7151-Es-geht-alles-voruber-es-geht-alles-vorbei/7151-Es-geht-alles-voruber-es-geht-alles-vorbei.mp3" type="audio/mpeg"/>
          Your browser does not support the HTML5 Audio element.
      </audio>
        {/* <Button className="theme-button" color="primary">LightTheme</Button>
        <Button className="theme-button" color="secondary" >DarkTheme</Button> */}
       {isHidden === true ? (  
    <Grid container className="App">
      <Loading />
    </Grid>
    ) : (
        <Grid
        className="App"
          container
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Grid container style={{ position: "relative", height: "auto" }}>
            <WeatherInfo />
          </Grid>

        
        </Grid>
      )}
    </ThemeProvider>
  </Context.Provider>
  );
}

export default App;


// const [state, dispatch] = useReducer( reducer, action );
// const {apiData, isHidden, } = state
// function initApi(initialApiData) {
//   return {
//     apiData: initialApiData,
//     isHidden: true
//   }
// }

// function apiDataReducer (state , action) {
//   switch (action.type) {
//     case 'DATA_LOAD_SUCCESSFUL':
//       return {
//         apiData: action.payload,
//         isHidden: false};
//     case 'DATA_LOAD_FAILED':
//       return {
//         apiData: [],
//         isHidden: null};
//     case 'RESET':
//       return initApi(action.payload);
//     default:
//       throw new Error();
//   }
// }

// function initToggle(initialTempToggle){
//   return {
//     isTempChecked: initialTempToggle
//   }
// }

// function isTempCheckedReducer(state , action ) {
//   switch (action.type) {
//     case 'CHECKED':
//       return {isTempChecked: true}
//     default:
//       throw new Error()
//   }
// }
// function IsTempChecked({initialTempToggle}){
//   const [state, dispatch] = useReducer(isTempCheckedReducer, initialTempToggle, initToggle)
// }
// function ApiData({initialApiData}){
//   const [state, dispatch] = useReducer(apiDataReducer, initialApiData, initApi)

// }
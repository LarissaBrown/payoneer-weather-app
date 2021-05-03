import axios from 'axios'
import {v4} from 'uuid'
import {sampleData} from '../../screens/apiSampleData'
//weather api loaded

    
   

    export const getPlayers = async(dispatch) => {
   

    const response = sampleData
    // axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
    
   console.log("axios response", response.list)
    dispatch( "DATA_LOAD_SUCCESSFUL", response.list)
   const carouselWeatherItems = response.map((carouselWeatherItems => {
      let key = v4();
      let celcius = Math.floor(carouselWeatherItems.main.temp - 273.15);
      let fahrenheit = Math.floor(
        ((carouselWeatherItems.main.temp - 273.15) * 9) / 5 + 32
      );
      let date = carouselWeatherItems.dt_txt.split(" ")[0];
      let desc = carouselWeatherItems.weather[0].main;

     return  {
        player: {
          key: key,
          celcius: celcius,
          fahrenheit: fahrenheit,
          date: date,
          desc: desc,
          //   image: require(`"./assets/${carouselWeatherItems.weather[0].main}_Munich.jpg"`),
        },
      }
      
    }))
    dispatch("GET_PLAYERS", carouselWeatherItems)
    return carouselWeatherItems 
    


  }  

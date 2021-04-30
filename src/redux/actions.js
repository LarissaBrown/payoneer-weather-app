import axios from 'axios'
import {v4} from 'uuid'
import { 
     EIGHT_TIMES_DATA, 
     FIVE_DAY_DATA , 
     WEATHER_DATA, 
     IS_LOADED, 
     IS_HIDDEN, 
     SET_FILTER, 
     IS_CHECKED_TEMP,
     WEATHER,
    _LOCAL_ITEMS} 
     from "./actionTypes";

let nextId = 0;





export const isHidden = Boolean => ({
    type: IS_HIDDEN,
    payload: { Boolean }



});
    

export const isLoaded = Boolean => ({
    type: IS_LOADED,
    payload: { Boolean }


});



export const isCheckedTemp = ()=> {
    return {
    type: IS_CHECKED_TEMP,
    payload: { isCheckedTemp }
    }

};


export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

let weather = [];
let fiveDayData = []
export const fetchWeather = () => {
   return function(dispatch) {
    axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
    .then(response => {
          console.log('REsponse', response)
     weather = [...weather,response.data.list]
          console.log("weather", weather)
     fiveDayData = weather.map((item, index )=> {

       console.log("index", typeof index)
      if(item[index + 1].dt_txt.split(' ')[0] === item.dt_txt.split(' ')[0] ){
          return item
      }else if (index + 1 <= 5 ){

          return item
      }
      console.log("fiveDayData", fiveDayData)
    })
    
    })
    .catch(err => console.error("error",err))
    return {
        type: WEATHER,
        payload: { weather }
   
  }
   }
  
  
}
  
  export const eightTimesData = () => {
     let oneDayWeatherData = []
    
      weather.map(item => {
      if(item.dt_txt.split(' ')[1] === "00:00:00"){
        oneDayWeatherData.push(item)
      } 
    
        if (eightTimesData === []){
            eightTimesData.push(item.dt_txt.split(' ')[0])
        }else if(eightTimesData[0] === item.dt_txt.split(' ')[0]){
            eightTimesData.push(item.dt_txt.split(' ')[0])
        } else if (eightTimesData[0] !== item.dt_txt.split(' ')[0]){
           return eightTimesData
        } 
        return eightTimesData
        }
      )
     
    return {
      type: EIGHT_TIMES_DATA,
      payload: {oneDayWeatherData, eightTimesData}
    }
  }
  
  

let threeHourData = []

export function graphDateClicked(i){

    weather.map((cardItem, index)=> {

        if(i === index || index < i+7){

            threeHourData.push(cardItem)
        }
        if(threeHourData.length === 8){
        threeHourData =[...threeHourData, cardItem]
        console.log("threeHourDataLength", threeHourData.length)

        }
        return threeHourData
 
      })
  return {
    type: 'GRAPH_DATE_CLICKED',
    payload: {threeHourData}
  }
}





export function getPlayers(){
  let _localItems = []
  console.log("weatherInGetPlayers", weather)
  weather.map((_localItem) => {
        
            let key = v4()
            let celcius = Math.floor(_localItem.main.temp - 273.15)
            let fahrenheit = Math.floor((_localItem.main.temp - 273.15)* 9/5 + 32)
            let date = _localItem.dt_txt.split(' ')[0]
            let desc = _localItem.weather[0].main

             _localItems.push( ..._localItems, { player: {
                key: key,
                celcius: celcius,
                fahrenheit: fahrenheit,
                date: date,                               
                desc: desc
                // image: require(`"src/redux/reducers/assets/${_localItem.weather[0].main}_Munich.jpg"`),
            
                }
              }
             )
            return _localItems
            }
            )
            return {
              type: '_LOCAL_ITEMS',
              payload: {_localItems}
            }

         

          }
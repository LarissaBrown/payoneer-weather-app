import axios from 'axios'

export const isHidden = ()=> {
    return {
        type: 'IS_HIDDEN'
    }
}

export const apiCallWeatherData = () => {
    axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
    .then(response => {
    
       return response.data
       
        
    })
    .catch(err => console.error("error",err))

    return {
        type: 'WEATHER_DATA'
    }
}
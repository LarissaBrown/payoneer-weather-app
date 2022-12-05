const weatherReducer = (state ={}, action) => {

    switch(action.type){

        case 'LOAD_WEATHER':
            const {weather} = action.payload
            return [weather]
        case 'ONE_DAY_WEATHER_DATA':
          
        const {oneDayWeatherData} = action.payload

            return [oneDayWeatherData]
            
        default:
            return state                       
    }
}

export default weatherReducer
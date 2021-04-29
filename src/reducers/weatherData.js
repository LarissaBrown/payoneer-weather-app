const weatherData = (state =[], action) => {

    switch(action.type){

        case 'WEATHER_DATA':
            return !state
        default:
            return state
    }
}

export default weatherData
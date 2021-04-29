
const isWeatherImageReducer = (state = [] , action) => {

    switch(action.type){

        case 'IS_WEATHER_IMAGE':
            return [action.payload]
        default:
            return state
}
}

export default isWeatherImageReducer
const weatherReducer = (state =[], action) => {

    switch(action.type){

        case 'WEATHER_DATA':
            return [...weatherReducer, action.payload]
        default:
            return state
    }
}

export default weatherReducer
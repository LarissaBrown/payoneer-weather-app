const weatherReducer = (state =[], action) => {

    switch(action.type){

        case '_LOAD_WEATHER':
            const {weather} = action.payload
            return [ weather]
        default:
            return state                       
    }
}

export default weatherReducer
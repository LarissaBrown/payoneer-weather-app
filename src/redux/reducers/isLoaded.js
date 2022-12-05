const isLoadedReducer = (state = true, action) => {

    switch(action.type){

        case 'LOAD_WEATHER':
            return !state
        default:
            return state
    }
}

export default isLoadedReducer
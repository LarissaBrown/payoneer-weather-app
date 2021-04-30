const isLoadedReducer = (state = true, action) => {

    switch(action.type){

        case 'IS_LOADED':
            return false 
        default:
            return state
    }
}

export default isLoadedReducer
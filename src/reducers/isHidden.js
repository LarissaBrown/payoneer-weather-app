const isHiddenReducer = (state = true, action) => {

    switch(action.type){

        case 'IS_HIDDEN':
            return !state
        default:
            return state
    }
}

export default isHiddenReducer
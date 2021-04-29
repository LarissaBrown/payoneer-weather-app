const isHidden = (state = false, action) => {

    switch(action.type){

        case 'IS_HIDDEN':
            return !state
        default:
            return state
    }
}

export default isHidden
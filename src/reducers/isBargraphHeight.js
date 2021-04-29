
const isBargraphHeightReducer = (state = [] , action) => {

    switch(action.type){

        case 'IS_BARGRAPH_HEIGHT':
            return [action.payload]
        default:
            return state
}
}

export default isBargraphHeightReducer
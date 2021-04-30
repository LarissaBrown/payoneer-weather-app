
const fiveDayDataReducer = (state = [] , action) => {

    switch(action.type){

        case 'IS_FIVE_DAY_DATA':
            return [action.payload]
        default:
            return state
}
}

export default fiveDayDataReducer
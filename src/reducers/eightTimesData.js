
const eightTimesDataReducer = (state = [] , action) => {

    switch(action.type){

        case 'EIGHT_TIMES_DATA':
            return [action.payload]
        default:
            return state
}
}

export default eightTimesDataReducer



function eightTimesDataReducer(state = [] , action){

    switch(action.type){

        case 'EIGHT_TIMES_DATA':
            const { id, content} = action.payload;
            return [...eightTimesDataReducer, action.payload]
        default:
            return state
}
}

export default eightTimesDataReducer

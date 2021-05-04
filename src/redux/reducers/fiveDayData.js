
const fiveDayDataReducer = (state = [] , action) => {

    switch(action.type){

        case 'FIVE_DAY_DATA':
            const {fiveDayData} = action.payload
            return [fiveDayData]
        default:
            return state
}
}

export default fiveDayDataReducer
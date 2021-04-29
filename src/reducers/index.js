import isCheckedTempReducer from './isCheckedTemp'
import weatherDataReducer from './weatherData'
import isHiddenReducer from './isHidden'

import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    isCheckedTemp: isCheckedTempReducer,
    weatherData: weatherDataReducer,
    isHidden: isHiddenReducer

})

export default rootReducer
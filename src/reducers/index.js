import isCheckedTempReducer from './isCheckedTemp'
import weatherReducer from './weatherData'
import isHiddenReducer from './isHidden'
import isLoadedReducer from './isLoaded'

import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    isCheckedTemp: isCheckedTempReducer,
    weather: weatherReducer,
    isHidden: isHiddenReducer,
    isLoaded: isLoadedReducer

})

export default rootReducer
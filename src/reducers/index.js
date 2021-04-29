import isCheckedTempReducer from './isCheckedTemp'
import weatherReducer from './weatherData'
import isHiddenReducer from './isHidden'
import isLoadedReducer from './isLoaded'
import isWeatherImageReducer from './isWeatherImage'
import fiveDayDataReducer from './fiveDayData'
import eightTimesDataReducer from './eightTimesData'
import isBargraphHeightReducer from './isBargraphHeight'

import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    isCheckedTemp: isCheckedTempReducer,
    weather: weatherReducer,
    isHidden: isHiddenReducer,
    isLoaded: isLoadedReducer,
    fiveDayData: fiveDayDataReducer,
    eightTimesData: eightTimesDataReducer,
    isWeatherImage: isWeatherImageReducer,
    isBargraphHeight: isBargraphHeightReducer

})

export default rootReducer
import { _LOCAL_ITEMS } from "../actionTypes";
import weatherReducer from './weather'


const initialState = [
    {
        player: {
            key: Number,
            celcius: Number, 
            fahrenheit: Number,
            date: Number,                                 
            desc: ""
            // image: require(`"src/redux/reducers/assets/${_localItem.weather[0].main}_Munich.jpg"`),
        },
    }

]




function _localItemsReducer(state = initialState, action){



  switch (action.type) {

    case '_LOCAL_ITEMS': 
      const { ..._localItems } = action.payload;
      return {..._localItemsReducer, ..._localItems,
            completed: false}
    default:
      return state;
    }
}

export default _localItemsReducer
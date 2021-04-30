import { _LOCAL_ITEMS } from "../actionTypes";
import {v4} from 'uuid'


const initialState = [
    {
        player: {
            key: v4(),
            celcius: 5, 
            fahrenheit: 35,
            date: "2021-24-04",                                 
            desc: "Sunny"
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
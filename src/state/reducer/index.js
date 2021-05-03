// import { WEATHER, IS_HIDDEN, IS_TEMP_CHECKED , PLAYER} from "../constants";
import { actions, messages } from '../constants'


const initialState = {
  carouselWeatherItems: [],
  errorMessage: " ",
  isTempChecked: true ,
  isHidden: true,
  action: actions,
  message: messages
};

export const ToggleReducer = (
  state = initialState
 
) => {
  switch (actions) {


    case actions.IS_TEMP_CHECKED:
     
      return {isTempChecked: true};
    default:
      return state
  }
};

  
export const CarouselItemsReducer = (
    state = initialState
  ) => {
    switch (actions) {
      case actions.GET_PLAYERS:
    
        return initialState.message.DATA_LOAD_SUCCESSFUL ? [ ...state.carouselWeatherItems ]
          : [...state.carouselWeatherItems], {state:{errorMessage: ''}};

      case actions.IS_HIDDEN:
      
        return initialState.message.DATA_LOAD_SUCCESSFUL 
          ? {state: {isHidden: true }}
          : { ...state.isHidden, errorMessage: ''}; 
  
      default:
        return state;
    }
  };
  

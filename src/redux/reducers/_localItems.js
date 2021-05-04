
function _localItemsReducer(state = [], action){



  switch (action.type) {

    case '_LOCAL_ITEMS': 
      const { _localItems } = action.payload
      return [_localItems]
    default:
      return state;
    }
}

export default _localItemsReducer


 import * as mapReducer from   './mapReducer';

export const favorites = (state = [], action) => {
  switch(action.type) {
    case mapReducer.ADD_FAVORITE:
    if (state.some(el => el === action.payload))
        return state;
        else 
            return state.concat(action.payload)

            default:
            return state;
  }
}

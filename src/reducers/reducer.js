import * as types from './../types/types';

const initialState = {};

const reducer = (state = initialState, action) => {
  if(action.payload) {
    return { ...state }
  }
};

export default reducer;

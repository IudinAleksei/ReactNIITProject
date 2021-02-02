import { SHOW_LOADER, HIDE_LOADER, SEND_REQUEST } from './types';

const initialState = {
  loading: false,
  birdUrl: null
}

export const appReducer = (state = initialState, action = {type: null}) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true};
    case HIDE_LOADER: 
      return {...state, loading: false};
    case SEND_REQUEST:
      return {...state, birdUrl: action.payload};
    default: return state
  }
}
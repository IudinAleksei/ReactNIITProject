import { SHOW_IMAGE, HIDE_IMAGE, SEND_REQUEST } from './types';

const initialState = {
  loading: false,
  birdUrl: null,

}

export const appReducer = (state = initialState, action = {type: null}) => {
  switch (action.type) {
    case SHOW_IMAGE:
      return {...state, loading: false};
    case HIDE_IMAGE: 
      return {...state, loading: true};
    case SEND_REQUEST:
      return {...state, birdUrl: action.payload};
    default: return state
  }
}
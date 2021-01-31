import { BIRDS_DATA, BIRD_GROUPS } from '../data';
import { SWITCH_BIRD, SWITCH_GROUP } from './types';

const initialState = {
  birdGroups: BIRD_GROUPS,
  birdData: BIRDS_DATA,
  birds: BIRDS_DATA[0],
  bird: BIRDS_DATA[0][0]
}

export const navReducer = (state = initialState, action = {type: null}) => {   
  switch (action.type) {
    case SWITCH_GROUP:
      const idx = state.birdGroups.findIndex(group => group.href === action.payload);
      return {
        ...state, birds: state.birdData[idx], bird: state.birdData[idx][0]
      }
    case SWITCH_BIRD:
      return {
        ...state, bird: state.birds[action.payload]
      }    
    default: return state
  }
}
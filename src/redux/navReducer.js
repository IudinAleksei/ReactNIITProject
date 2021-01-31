import { BIRDS_DATA, BIRD_GROUPS } from '../data';
import { SWITCH_GROUP } from './types';

const initialState = {
  birdGroups: BIRD_GROUPS,
  birdData: BIRDS_DATA,
  birds: BIRDS_DATA[0]
}

export const navReducer = (state = initialState, action = {type: null}) => { 
  const idx = state.birdGroups.findIndex(group => group.href === action.payload);
  switch (action.type) {
    case SWITCH_GROUP:
      return {
        ...state, birds: state.birdData[idx]
      }    
    default: return state
  }
}
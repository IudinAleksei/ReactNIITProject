
import { BIRDS_DATA, BIRD_GROUPS } from '../data';

const initialState = {
  birdGroups: BIRD_GROUPS,
  birdData: BIRDS_DATA
}

export const navReducer = (state = initialState, action = {type: null}) => {
  switch (action.type) {    
    default: return state
  }
}
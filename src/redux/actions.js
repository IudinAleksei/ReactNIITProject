import { SWITCH_BIRD, SWITCH_GROUP } from "./types"

export function showLoader() {
  return {
    type: 'show'
  }
}

export function hideLoader() {
  return {
    type: 'hide'
  }
}

export function changeGroup (group = 'home') {  
  return {
    type: SWITCH_GROUP,
    payload: group
  }
}

export function changeBird (bird) {
  return {
    type: SWITCH_BIRD,
    payload: bird
  }
}
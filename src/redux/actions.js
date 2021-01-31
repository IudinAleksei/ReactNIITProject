import { SWITCH_GROUP } from "./types"

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

export function changeBirds (group = 'home') {  
  return {
    type: SWITCH_GROUP,
    payload: group
  }
}
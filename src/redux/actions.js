import { SHOW_LOADER, HIDE_LOADER, SWITCH_BIRD, SWITCH_GROUP, SEND_REQUEST } from "./types"
import { URL_PHOTO_API } from '../common/constants';

const getDataFromApi = async (url) => {
  try {    
    const res = await fetch(url);
    const data = (res.ok) ? await res.json() : 'connection error';

    return data;
  } catch (err) {
    return 'connection error';
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function changeGroup(group) {  
  return {
    type: SWITCH_GROUP,
    payload: group
  }
}

export function changeBird(bird) {
  return {
    type: SWITCH_BIRD,
    payload: bird
  }
}

export function getPhotoURL(birdName) {   
  return async dispatch => {
    const res = await getDataFromApi(`${URL_PHOTO_API}${birdName}`);
    dispatch({
      type: SEND_REQUEST,
      payload: res.photos.photo[0].url_m
    });
  }
}
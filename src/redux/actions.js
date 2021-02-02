import { SHOW_IMAGE, HIDE_IMAGE, SWITCH_BIRD, SWITCH_GROUP, SEND_REQUEST } from "./types"
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

export function showImage() {
  return {
    type: SHOW_IMAGE
  }
}

export function hideImage() {
  return {
    type: HIDE_IMAGE
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

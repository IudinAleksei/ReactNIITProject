const initialState = {
  loading: false,
  alert: null
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'show':
      return {...state, loading: true};
    case 'hide': 
      return {...state, loading: false};
    default: return state
  }
}
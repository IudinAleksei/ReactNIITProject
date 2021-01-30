const initialState = {
  posts: [],
  fetchdPosts: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'create': 
      return { ...state, posts: state.posts.concat(action.payload)}
    default: return state;
  }  
}
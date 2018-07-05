import {
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR,
  FETCH_SEARCH_TERM
} from '../actions/recipes';

const initialState = {
  all:[ 
    {
      id:0,
      title:'',
      ingredients:[],
      directions:''
    }
  ],
  error: null,
  searchTerm:''

};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_RECIPES_SUCCESS) {
      return Object.assign({}, state, {
          all: action.data,
          error: null
      });
  } else if (action.type === FETCH_RECIPES_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  } else if (action.type === FETCH_SEARCH_TERM) {
    return Object.assign({}, state, {
        searchTerm: action.searchTerm,
        error: null
    });
}  
  return state;
}

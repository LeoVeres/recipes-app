import {
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR,
  SEARCH_RECIPES
} from '../actions/recipes';

const initialState = {
  all:[ 
    {
      id:0,
      title:'',
      ingredients:[],
      directions:'',
      tags:[]
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
  } else if (action.type === SEARCH_RECIPES) {
    return Object.assign({}, state, {
        searchTerm: action.data,
        error: null
    });
}  

  return state;
}

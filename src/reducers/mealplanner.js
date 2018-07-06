import {
FETCH_PLANS_SUCCESS,
FETCH_PLANS_ERROR,
SEARCH_PLANS
} from '../actions/mealplanner';

const initialState = {
  plans:[ 
    {
      day:'',
      meal:'',
      id:0,
      title:'',
      ingredients:[],
      directions:'',
      tags:[]
    }
  ],
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PLANS_SUCCESS) {
      return Object.assign({}, state, {
          plans: action.data,
          error: null
      });
  } else if (action.type === FETCH_PLANS_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  } else if (action.type === SEARCH_PLANS) {
    return Object.assign({}, state, {
        searchTerm: action.data,
        error: null
    });
}  

  return state;
}

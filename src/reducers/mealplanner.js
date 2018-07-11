import {
FETCH_PLANS_SUCCESS,
FETCH_PLANS_ERROR,
SEARCH_PLANS,
FETCH_ITEMS_SUCCESS,
TOGGLE_CHECKED_ITEMS
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
  extraItems:[
    {
        extra:'',
        id:0,
        checked:false
    }
  ],
  hideCheckedItems:false,
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
else if (action.type === FETCH_ITEMS_SUCCESS) {
    return Object.assign({}, state, {
        extraItems: action.data,
        error: null
    });
}  else if (action.type === TOGGLE_CHECKED_ITEMS) {
    console.log(state.hideCheckedItems);
    return Object.assign({}, state, {
        hideCheckedItems: !state.hideCheckedItems,
        error: null
    });
} 

  return state;
}

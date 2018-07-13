import recipesReducer from './recipes';
import {
  fetchRecipesSuccess,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR,
  SEARCH_RECIPES
} from '../actions/recipes';

describe('recipesReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const newState = recipesReducer(undefined, {
            type: '__UNKNOWN'
        });

        expect(newState.recipes).toEqual(undefined);
        });
    });
    
it('should return the current state on an unknown action', () => {
    const state = {
        all: [{ title: 'test' }],
        error: null
    };

    const newState = recipesReducer(state, {
        type: '__unknownaction'
    });
    expect(newState).toEqual(state);
});

it('should handle the fetchRecipesSuccess action', () => {
    const state = {
       title: 'test' ,
    };

    const newState = recipesReducer(undefined, fetchRecipesSuccess(state));
    expect(newState).toEqual({
      all: { title: 'test' },
        error: null,
        searchTerm:''
    })
});
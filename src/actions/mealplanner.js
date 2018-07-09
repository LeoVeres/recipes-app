import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';


export const FETCH_PLANS_SUCCESS = 'FETCH_PLANS_SUCCESS';
export const fetchPlansSuccess = (data) => ({
    type: FETCH_PLANS_SUCCESS,
    data
});

export const FETCH_PLANS_ERROR = 'FETCH_PLANS_ERROR';
export const fetchPlansError = error => ({
    type: FETCH_PLANS_ERROR,
    error
});


export const SEARCH_PLANS = 'SEARCH_PLANS';
export const searchPlans = (data) => ({
    type: SEARCH_PLANS,
    data
});

export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS ';
export const fetchItemsSuccess = (data) => ({
    type: FETCH_ITEMS_SUCCESS ,
    data
});

export const fetchPlans = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/mealplanner`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchPlansSuccess(data)))
        .catch(err => {
            dispatch(fetchPlansError(err));
        });
};

export const fetchOnePlan = id => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/mealplanner/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchPlansSuccess(data)))
        .catch(err => {
            dispatch(fetchPlansError(err));
        });
};


export const createPlan = plan => (dispatch, getState) => {
    console.log(plan);
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/mealplanner`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(plan)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                console.log('create recipe error')
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const deletePlan = id => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/mealplanner/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => dispatch(fetchPlans()))
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                console.log('create recipe error')
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const updatePlan = (recipe,id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/mealplanner/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(recipe)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                console.log('create recipe error')
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};


export const createItem = item => (dispatch, getState) => {
    console.log(item);
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/shoppinglist`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(item)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                console.log('create recipe error')
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const deleteItem = id => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/shoppinglist/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => dispatch(fetchItems()))
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                console.log('create recipe error')
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};


export const fetchItems= () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/shoppinglist`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchItemsSuccess(data)))
        .catch(err => {
            dispatch(fetchPlansError(err));
        });
};
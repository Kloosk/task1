import axios from "axios";
import {FETCH_NAMES_REQUEST,FETCH_NAMES_FAILURE,FETCH_NAMES_SUCCESS} from './fetchNamesTypes'

export const fetchNamesRequest = () => {
    return{
        type: FETCH_NAMES_REQUEST
    }
};
export const fetchNamesSuccess = names => {
  return{
      type: FETCH_NAMES_SUCCESS,
      payload: names
  }
};
export const fetchNamesFailure = error => {
    return{
        type: FETCH_NAMES_FAILURE,
        payload: error
    }
};

export const fetchNames = () => {
    return function(dispatch){
        dispatch(fetchNamesRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const names = res.data.map(el => el.name);
                dispatch(fetchNamesSuccess(names));
            }).catch(err => {
                dispatch(fetchNamesFailure(err.message));
        })
    }
};
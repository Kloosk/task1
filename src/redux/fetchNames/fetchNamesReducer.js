import {FETCH_NAMES_FAILURE,FETCH_NAMES_SUCCESS,FETCH_NAMES_REQUEST} from "./fetchNamesTypes";

const initialState = {
  loading: false,
  names: [],
  error: ''
};

const fetchNamesReducer = (state=initialState,action) => {
  switch(action.type){
    case FETCH_NAMES_REQUEST:{
      return{
        ...state,
        loading: true
      }
    }
    case FETCH_NAMES_SUCCESS:{
      return{
        ...state,
        loading: false,
        names: action.payload,
        error: ''
      }
    }
    case FETCH_NAMES_FAILURE:{
      return{
        ...state,
        loading: false,
        names: [],
        error: action.payload
      }
    }
    default: return state
  }
};

export default fetchNamesReducer;


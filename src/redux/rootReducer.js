import {combineReducers} from 'redux';
import fetchNamesReducer from "./fetchNames/fetchNamesReducer";

const rootReducer = combineReducers({
    fetchNames: fetchNamesReducer,
});

export default rootReducer;
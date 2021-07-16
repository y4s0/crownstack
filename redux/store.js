import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import songsReducer from "./reducers";

const rootReducer = combineReducers({
    songsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import fitnessReducer from "./reducers";

const store = createStore(fitnessReducer, applyMiddleware(thunk));

export default store;
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import contentReducer from "./content-reducer";

let reducers = combineReducers({
  auth: authReducer,
  content: contentReducer,
});

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;

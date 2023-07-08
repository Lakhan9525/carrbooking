import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import {  authReducer  } from "./authentication/auth.reducer";
import { Reducer } from "./register/register.reducer";
import {Reducer2} from "./education/education.reducer"
//import { Reducer } from "./register/register.reducer";

//import { register as Reducer } from "./register/register.reducer";
//import { studentReducer } from "./student/student.reducer";
//import { testReducer } from "./tests/test.reducer";


const rootReducer = combineReducers({
 user:authReducer,
 UserInfo:Reducer,
 Educt:Reducer2,
  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
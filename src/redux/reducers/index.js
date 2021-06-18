import { combineReducers } from "redux";
import FrontEnd from "./reducer1";
import BackEnd from "./reducer2";

const rootReducer = combineReducers({ frontEnd: FrontEnd, backEnd: BackEnd });

export default rootReducer;

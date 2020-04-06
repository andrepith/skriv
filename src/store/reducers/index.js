import { combineReducers } from "redux";
import { list } from "./skrivReducer";
import { utility } from "./utilityReducer";

export default combineReducers({ list, utility });

import { combineReducers } from "redux";
import { list } from "./skrivReducer";
import { isModal } from "./utilityReducer";

export default combineReducers({ list, isModal });

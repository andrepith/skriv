import { combineReducers } from "redux";
import { list } from "./skrivReducer";
import { isModal } from "./modalReducer";

export default combineReducers({ list, isModal });

import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { navReducer } from "./navReducer";

export const rootReducer = combineReducers({
  nav: navReducer,  
  app: appReducer 
});
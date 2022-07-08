import { combineReducers } from "redux";

import nav from "./nav";
import window from "./window";
import home from "./home";

const rootReducer = combineReducers({
    nav, window, home
});

export default rootReducer;
import { combineReducers } from "redux";

import nav from "./nav";
import window from "./window";

const rootReducer = combineReducers({
    nav, window,
});

export default rootReducer;
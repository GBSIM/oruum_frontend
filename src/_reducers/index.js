import { combineReducers } from "redux";

import nav from "./nav";
import window from "./window";
import home from "./home";
import user from "./user";

const rootReducer = combineReducers({
    nav, window, home, user
});

export default rootReducer;
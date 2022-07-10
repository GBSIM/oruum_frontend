import { combineReducers } from "redux";

import nav from "./nav";
import window from "./window";
import home from "./home";
import user from "./user";
import stock from "./stock";

const rootReducer = combineReducers({
    nav, window, home, user, stock
});

export default rootReducer;
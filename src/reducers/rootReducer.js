import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import userReducer from "./User";
import todoReducer from "./Todo";

const rootReducer=history=>combineReducers({
    router: connectRouter(history),
    user: userReducer,
    todo: todoReducer,
});

export default rootReducer;
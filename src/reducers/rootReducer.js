import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import userReducer from "./User";
import todoReducer from "./Todo";

const createRootReducer=history=>combineReducers({
    router: connectRouter(history),
    user: userReducer,
    todo: todoReducer,
});

export default createRootReducer;
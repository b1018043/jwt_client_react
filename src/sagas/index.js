import {all} from "redux-saga/effects";
import UserSaga from "./User";
import TodoSaga from "./Todo";

export default function* rootSaga(){
    yield all([
        ...UserSaga,
        ...TodoSaga,
    ]);
}
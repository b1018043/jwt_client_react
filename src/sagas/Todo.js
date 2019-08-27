import { call, put, takeEvery } from 'redux-saga/effects';
import {getTodoData,postTodoData,patchTodoData,deleteTodoData} from '../apis/Todo';
import {getTodoSuccess,getTodoFailed,GET_TODO,POST_TODO,PATCH_TODO,DELETE_TODO} from "../actions/Todo";
import {logout} from "../actions/User";

function* getTodo(action){
    const token=action.payload;
    const {todos,err}= yield call(getTodoData,token);
    if(err){
        yield put(getTodoFailed(err));
        yield put(logout());
    }else{
        yield put(getTodoSuccess(todos));
    }
}

function* postTodo(action){
    const {token,todo}=action.payload;
    const {todos,err}=yield call(postTodoData,token,todo);
    if(err){
        yield put(getTodoFailed(err));
        yield put(logout());
    }else{
        yield put(getTodoSuccess(todos));
    }
}

function* patchTodo(action){
    const {token,todoid,process}=action.payload;
    const {todos,err}=yield call(patchTodoData,token,todoid,process);
    if(err){
        yield put(getTodoFailed(err));
        yield put(logout());
    }else{
        yield put(getTodoSuccess(todos));
    }
}

function* deleteTodo(action){
    const {token,todoid}=action.payload;
    const {todos,err}=yield call(deleteTodoData,token,todoid);
    if(err){
        yield put(getTodoFailed(err));
        yield put(logout());
    }else{
        yield put(getTodoSuccess(todos));
    }
}

const sagas=[
    takeEvery(GET_TODO,getTodo),
    takeEvery(POST_TODO,postTodo),
    takeEvery(PATCH_TODO,patchTodo),
    takeEvery(DELETE_TODO,deleteTodo),
];

export default sagas;
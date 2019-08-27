import * as actions from "../actions/Todo";

const initState={
    todos: []
}

export default function todoReducer(state=initState,action){
    switch(action.type){
        case actions.GET_TODO_SUCCESS:
            return {
                ...state,
                todos: action.payload
            }
        case actions.GET_TODO_FAILED:
            return {
                ...state,
                todos: []
            }
        default:
            return state
    }
}
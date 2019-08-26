export const GET_TODO ="GET_TODO";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAILED = "GET_TODO_FAILED";
export const POST_TODO ="POST_TODO";
export const PATCH_TODO ="PATCH_TODO";
export const DELETE_TODO ="DELETE_TODO";

export const getTodoRequest=(token)=>({
    type: GET_TODO,
    payload: token
})

export const getTodoSuccess=(todos)=>({
    type: GET_TODO_SUCCESS,
    payload:todos
})

export const getTodoFailed=(err)=>({
    type: GET_TODO_FAILED,
    payload: err
})

export const postTodoRequest=(token,todo)=>({
    type: POST_TODO,
    payload: {token,todo}
})

export const patchTodoRequest=(token,todoid,process)=>({
    type: PATCH_TODO,
    payload: {token,todoid,process}
})

export const deleteTodoRequest=(token,todoid)=>({
    type: DELETE_TODO,
    payload: {token,todoid}
})
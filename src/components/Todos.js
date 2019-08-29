import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {Typography,Card,CardContent,CardActions,Button,makeStyles} from "@material-ui/core";

import {deleteTodoRequest,patchTodoRequest,getTodoRequest} from "../actions/Todo";

const useStyles=makeStyles({
    todolist:{
        display: "inline-block",
        width: "32%",
        border: "solid black 0.5px",
        borderRadius: "1em",
        margin: "2px",
        textAlign: "center",
        float:"left",
        top: 0,
        left:0,
    },
    typo:{
        display: "inline-block",
    },
    card:{
        top: "50%",
        left: "50%",
        width:"95%",
        background:"#D8D8D8",
        marginBottom: "3px",
        transform: "translate(3%,-3%)",
    }
})

const TodoList=({todos,text,token})=>{
    const classes=useStyles()
    const dispatch=useDispatch();
    return (
        <div className={classes.todolist}>
            <Typography variant="h5" gutterBottom>
                {text}
            </Typography>
            {todos.map(todo=>{
                return (
                    <Card
                        key={todo.todoid}
                        className={classes.card}
                    >
                        <CardContent>
                            <Typography className={classes.typo} variant="subtitle1" gutterBottom>{todo.todo}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                onClick={()=>{
                                    dispatch(deleteTodoRequest(token,todo.todoid))
                                }}
                                >
                                delete
                            </Button>
                            <Button
                                onClick={()=>{
                                    dispatch(patchTodoRequest(token,todo.todoid,todo.process))
                                }}
                            >
                                next
                            </Button>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}

function TodoLists(){
    const {todos}=useSelector(state=>state.todo);
    const {token}=useSelector(state=>state.user);
    const dispatch=useDispatch();
    React.useEffect(()=>{
        dispatch(getTodoRequest(token))
    },[]);
    const plans=todos.filter((todo)=>{
        return todo.process==="plan"
    })
    const doings = todos.filter((todo) => {
        return todo.process === "doing"
    })
    const dones = todos.filter((todo) => {
        return todo.process === "done"
    })
    return (
        <div>
            {(!token)&&<Redirect to="/login"/>}
            <TodoList todos={plans} text="plan" token={token}/>
            <TodoList todos={doings} text="doing" token={token} />
            <TodoList todos={dones} text="done" token={token} />
        </div>
    )
}

export default TodoLists;
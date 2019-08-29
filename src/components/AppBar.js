import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Botton from "@material-ui/core/Button";
import {useDispatch,useSelector} from "react-redux";
import {logout} from "../actions/User";
import {postTodoRequest} from "../actions/Todo";

import {makeStyles, TextField} from "@material-ui/core"

const useStyles=makeStyles({
    bar:{
        display: "block",
    }
})

function MyAppBar(){
    const classes=useStyles()
    const dispatch=useDispatch();
    const {token}=useSelector(state=>state.user);
    const [todo,setTodo]=React.useState("");
    return (
        <AppBar className={classes.bar} position="relative">
            <Botton
                onClick={()=>{
                    dispatch(logout())
                }}
            >
                Logout
            </Botton>
            <TextField
                label="Todo"
                value={todo}
                onChange={(e)=>{
                    setTodo(e.target.value)
                }}
            />
            <Botton
                onClick={()=>{
                    dispatch(postTodoRequest(token,todo))
                    setTodo("")
                }}
            >
                Add Todo
            </Botton>
        </AppBar>
    )
}

export default MyAppBar;
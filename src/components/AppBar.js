import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Botton from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {logout} from "../actions/User";

import {makeStyles} from "@material-ui/core"

const useStyles=makeStyles({
    bar:{
        display: "block",
    }
})

function MyAppBar(){
    const classes=useStyles()
    const dispatch=useDispatch();
    return (
        <AppBar className={classes.bar} position="relative">
            <Botton
                onClick={()=>{
                    dispatch(logout())
                }}
            >
                Logout
            </Botton>
        </AppBar>
    )
}

export default MyAppBar;
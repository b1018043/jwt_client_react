import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Botton from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {logout} from "../actions/User";

function MyAppBar(){
    const dispatch=useDispatch();
    return (
        <AppBar>
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
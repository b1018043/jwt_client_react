import React from "react";
import TextField from '@material-ui/core/TextField';
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {loginRequest} from "../actions/User";

function Login(){
    const dispatch=useDispatch();
    const [value,setValue]=React.useState({
        email:"",
        pass: "",
    });
    return (
        <div>
            <div>
                <TextField
                    label="email"
                    value={value.email}
                    onChange={e=>{
                        setValue({
                            ...value,
                            email:e.target.value,
                        })
                    }}
                />
                <TextField
                    label="password"
                    value={value.pass}
                    onChange={e=>{
                        setValue({
                            ...value,
                            pass:e.target.value,
                        })
                    }}
                />
                <Button
                    disabled={!(value.email&&value.pass)}
                    onClick={()=>{
                        const {email,pass}=value
                        dispatch(loginRequest(email,pass))
                        setValue({
                            ...value,
                            email:"",
                            pass:"",
                        })
                    }}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login;
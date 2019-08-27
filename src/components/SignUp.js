import React from "react";
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {signUpRequest} from "../actions/User"

function SignUp(){
    const dispatch=useDispatch();
    const [value,setValue]=React.useState({
        username: "",
        email: "",
        pass: "",
    });
    return (
        <div>
            <div>
                <TextField
                    label="username"
                    value={value.username}
                    onChange={e=>{
                        setValue({
                            ...value,
                            username: e.target.value,
                        })
                    }}
                />
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
                            pass:e.target.value
                        })
                    }}
                />
                <Button
                    disabled={!(value.email&&value.username&&value.pass)}
                    onClick={()=>{
                        const {username,email,pass}=value
                        dispatch(signUpRequest(username, email, pass))
                        setValue({
                            pass:"",
                            username: "",
                            email:"",
                        })
                    }}
                >
                    Sign Up
                </Button>
            </div>
        </div>
    )
}

export default SignUp;
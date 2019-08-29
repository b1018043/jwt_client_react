import React from "react";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";
import {Redirect} from "react-router-dom";

function Error(){
    const {token}=useSelector(state=>state.user);
    const [count,setCount]=React.useState(0);
    React.useEffect(()=>{
        function countUp() {
            setCount(count + 1);
        }
        const id=setInterval(()=>{
            countUp();
        },1000);
        return ()=>{
            clearInterval(id);
        }
    })
    function moveAt(token){
        return token ? <Redirect to="/todo" /> : <Redirect to="/login" />;
    }
    return (
        <div>
            <Typography>
                Error 404 not found.
            </Typography>
            <Typography>
                {count>5?0:5-count} seconds later move page.
            </Typography>
            {(count>5)&&moveAt(token)}
        </div>
    )
}

export default Error;
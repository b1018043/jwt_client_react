import * as request from "superagent";

export function sendLoginRequest(email, pass) {
    return request.post(`http://localhost:8080/login`)
        .set("Content-Type", "application/json")
        .send({ email: email, password: pass })
        .then(res => {
            const json = JSON.parse(res.text);
            const { token } = json;
            return token;
        })
        .catch(err => {
            if (err.status === 400)
            {
                console.log("無効なリクエストです")
            } else if (err.status === 417)
            {
                console.log("アカウントが存在しません")
            } else
            {
                console.log("無理")
            }
            return { err };
        })
}

export function sendSignUpRequest(username,email,pass){
    return request.post(`http://localhost:8080/login`)
        .set("Content-Type", "application/json")
        .send({username:username,email:email,password:pass})
        .then(res=>{
            const json=JSON.parse(res.text);
            const {token}=json;
            return token;
        })
        .catch(err=>{
            if(err.status===400){
                console.log("無効なリクエストです")
            }else if(err.status===417){
                console.log("もう一回送りなおしてください")
            }else{
                console.log("無理")
            }
            return {err};
        })
}
import * as request from "superagent";

export function sendLoginRequest(email, pass) {
    return request.post(`http://localhost:8080/login`)
        .set("Content-Type", "application/json")
        .send({ email: email, password: pass })
        .then(res => {
            const json = JSON.parse(res.text);
            const { token } = json;
            return {token};
        })
        .catch(err => {
            if (err.status === 400)
            {
                console.log("無効なリクエストです")
            } else if (err.status === 401)
            {
                console.log("認証に失敗しました")
            } else
            {
                console.log("無理")
            }
            return { err };
        })
}

export function sendSignUpRequest(username,email,pass){
    return request.post(`http://localhost:8080/signup`)
        .set("Content-Type", "application/json")
        .send({username:username,email:email,password:pass})
        .then(res=>{
            const json=JSON.parse(res.text);
            const {token}=json;
            return {token};
        })
        .catch(err=>{
            if(err.status===400){
                console.log("無効なリクエストです")
            }else if(err.status===409){
                console.log("すでに登録されています")
            }else{
                console.log("無理")
            }
            return {err};
        })
}
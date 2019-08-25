import * as request from "superagent";

export function getTodoData(token){
    return request.get(`http://localhost:8080/private`)
        .set("Content-Type", "application/json")
        .set("Authorization",`Bearer ${token}`)
        .then(res=>{
            return JSON.parse(res.text);
        })
        .catch(err=>{
            if(err.status===400){
                console.log("無効なリクエストです")
            }else if(err.status===500){
                console.log("もう一回")
            }else{
                console.log("無理")
            }
            return {err};
        })
}

export function postTodoData(token,todo){
    return request.post(`http://localhost:8080/private`)
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send({todo:todo})
        .then(res=>{
            return JSON.parse(res.text);
        })
        .catch(err=>{
            if(err.status===400){
                console.log("無効なリクエストです")
            }else if(err.status===500){
                console.log("もう一回")
            }else{
                console.log("無理")
            }
            return {err};
        })
}

export function patchTodoData(token,todoid,process){
    return request.patch(`http://localhost:8080/private`)
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send({todoid:todoid,process:process})
        .then(res=>{
            return JSON.parse(res.text);
        })
        .catch(err=>{
            if(err.status===400){
                console.log("無効なリクエストです")
            }else if(err.status===500){
                console.log("もう一回")
            }else{
                console.log("無理")
            }
            return {err};
        })
}

export function deleteTodoData(token,todoid){
    return request.delete(`http://localhost:8080/private`)
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send({todoid:todoid})
        .then(res=>{
            return JSON.parse(res.text);
        })
        .catch(err=>{
            if(err.status===400){
                console.log("無効なリクエストです")
            }else if(err.status===500){
                console.log("もう一回")
            }else{
                console.log("無理")
            }
            return {err};
        })
}
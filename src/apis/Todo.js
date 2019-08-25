import * as request from "superagent";

export function getTodoData(token){
    return request.get(`http://localhost:8080/private`)
        .set("Content-Type", "application/json")
        .set("Authorization",`Bearer ${token}`)
        .then(res=>{
            return JSON.parse(res.text);
        })
}

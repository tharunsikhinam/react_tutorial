
// creating an redux-thunkaction
import apiClient from "../utils/ApiClient";

export function modifyKey(data) {
    // we can do some pre-processing
    return function (dispatch) {
        // we can do an API call
        // get data from API
        // dispatch the action
        dispatch({type: "MODIFY_KEY",
                  payload: data})
    }
}

export function fetchUsers(){
    return function (dispatch){
        dispatch({type: "API_CALL_STARTED"})
        let promise = apiClient.makeAPIRequest("https://gorest.co.in/public-api/users", "GET")
        promise.then((results)=>{
            const action={type: "FETCH_USERS",data: results.data.result}
            dispatch(action)
            dispatch({type: "API_CALL_ENDED"})
            return results;
        }).catch((error)=>{
            dispatch({type: "API_CALL_FAILED",payload: error})
        });
    }
}

export function searchUsers(query){
    return function(dispatch){
        dispatch({type: "API_CALL_STARTED"})
        let promise = apiClient.makeRequest("https://gorest.co.in/public-api/users?_format=json&access-token=Pyiex5tdmdZcgPCIdKy4VLOPWkMiS5a3d7y1&first_name="+query, "GET")
        promise.then((results)=>{
            const action={type: "FETCH_USERS",data: results.data.result}
            dispatch(action)
            dispatch({type: "API_CALL_ENDED"})
            return results
        })
    }
}

export function deleteUser(userId){
    return function(dispatch){
        let promise = apiClient.makeAPIRequest("https://gorest.co.in/public-api/users/" + userId,"DELETE")
        promise.then((results)=>{

            dispatch(fetchUsers())
        }).catch((error)=>{
            alert("DELETE UNSUCCESSFULL")
        })
    }
}
export function loginUser(){
    return function(dispatch){
        dispatch({type: "LOGIN"})
    }
}

export function logoutUser(){
    return function(dispatch){
        dispatch({type: "LOGOUT"})
        localStorage.removeItem('state')
    }
}
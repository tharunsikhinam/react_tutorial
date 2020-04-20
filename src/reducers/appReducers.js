export default function reducer(state = {inProgress: false, loggedIn: false}, action){
    let newState = Object.assign({},state)
    switch(action.type){
        case "API_CALL_STARTED":
            newState.inProgress = true
            return newState;
            break;
        case "API_CALL_ENDED":
            newState.inProgress = false
            return newState;
        case "API_CALL_FAILED":
            newState.error = action.payload
            return newState;
        case "LOGIN":
            newState.loggedIn = true
            return newState;
        case "LOGOUT":
            newState.loggedIn = false;
            return newState;
        default: return state
    }
    return newState
}
export default function reducer(state = {inProgress: false}, action){
    let newState = Object.assign({},state)
    switch(action.type){
        case "API_CALL_STARTED":
            newState.inProgress = true
            return newState;
            break;
        case "API_CALL_ENDED":
            newState.inProgress = false
            return newState;

        default: return state
    }
    return newState
}

// reducer
// the current state, and an action
// action { type: " ",data:  }
// return newState after applying changes
// reducer pure function
// within a reducer no API call/
// or no db operation.. NO ASYNC OPERATION
export default function reducer(state = {key: "VALUE", users: []}, action){
    let newState = Object.assign({},state)
    switch(action.type){
        case "MODIFY_USER":
            newState.key = action.data.key
            return newState;
            break;
        case "ADD_USER":
            newState["newKey"] = "SOME OTHER VALUE";
            return newState
            break;
        case "FETCH_USERS": newState.users = action.data
                            return newState;
        return newState;

        default: return state
    }
    return state
}
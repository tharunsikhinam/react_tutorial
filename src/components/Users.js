import React,{Component} from 'react';
import apiClient from "../utils/ApiClient"
import ListComponent from "./ListComponent";
import FormComponent from "./FormComponent";
class Users extends Component{
    constructor(props){
        super(props)
        this.state={users: [], query: ""}
        this.onDeleteUserClick = this.onDeleteUserClick.bind(this)
        this.onSearchClick = this.onSearchClick.bind(this)
        this.onCreateUser = this.onCreateUser.bind(this)
    }
    componentDidMount(){
        this.refreshUsers()
    }
    refreshUsers(){
        let promise = apiClient.makeAPIRequest("https://gorest.co.in/public-api/users", "GET")
        promise.then((results)=>{
            console.log(results)
            this.setState({users: results.data.result})
        })
    }
    onDeleteUserClick(index){
        const userId = this.state.users[index].id
        // delete the user
        let promise = apiClient.makeAPIRequest("https://gorest.co.in/public-api/users/" + userId,"DELETE")

        promise.then((results)=>{
                this.refreshUsers()
        }).catch((error)=>{
          alert("DELETE UNSUCCESSFULL")
        })
    }
    onSearchClick(){
        let promise = apiClient.makeRequest("https://gorest.co.in/public-api/users?_format=json&access-token=Pyiex5tdmdZcgPCIdKy4VLOPWkMiS5a3d7y1&first_name="+this.state.query, "GET")
        promise.then((results)=>{
            this.setState({users: results.data.result})
        })
    }
    onCreateUser(user){
        // MAKE API CALL
        console.log("IN PARENT COMPONENT",user)
        // POST API CALL
            // ON POST API CALL SUCCESS
                // REFRESH USER LIST
    }

    render(){
        console.log("USERS ",this.state)
        let user_names = this.state.users.map((user)=>{
            return user.first_name
        })

        return <div>USERS

            <p>Create User</p>
            <FormComponent
                onSubmit={this.onCreateUser}/>
            <p>Enter First Name</p>
            <textarea onChange={(event)=>{
                this.setState({query: event.target.value})
                this.onSearchClick()
                // make the api call here
            }} />

            {/* FORM COMPONENT*/}
            <button onClick={this.onSearchClick}>Search</button>
            <ListComponent list={user_names}
                           deleteItem={true}
                           fontSize={"25px"}
                           onDeleteItemClick={this.onDeleteUserClick} />
        </div>
    }
}

export default Users
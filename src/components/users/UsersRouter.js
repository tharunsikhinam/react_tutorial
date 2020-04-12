import React,{Component} from 'react';
import apiClient from "../../utils/ApiClient"
import ListComponent from "../ListComponent";
import FormComponent from "../FormComponent";
import {Switch, Route, NavLink, useParams, useRouteMatch} from "react-router-dom";

class UsersRouter extends Component{
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
        console.log("USERS ",this.state,this.props)
        let user_names = this.state.users.map((user)=>{
            return user.first_name
        })

        return <div >
            <br/>
            USERS

            <div><div style={{borderColor: 'black', borderWidth: '2px', borderStyle: 'solid'}}>
                <p>Enter First Name</p>
                <textarea onChange={(event)=>{
                    this.setState({query: event.target.value})
                    this.onSearchClick()
                }} />
                <button onClick={this.onSearchClick}>Search</button>
            </div>
                {/*Display*/}
                <div style={{borderColor: 'black', borderWidth: '2px', borderStyle: 'solid'}}>
                    <ListComponent list={user_names}
                                   deleteItem={true}
                                   fontSize={"25px"}
                                   onDeleteItemClick={this.onDeleteUserClick} />
                </div>
            </div>

            <NavLink to={"/usersRouter/create"}>Create User</NavLink>

             <Switch>
                 <Route  exact path = {"/usersRouter"} render={()=>{
                     return <div>

                     </div>
                 }}/>

                 <Route path = {"/usersRouter/create"} render={()=>{
                     return <FormComponent error={[]}/>
                 }}/>
                 <Route path = {"/users/:id"} render={()=>{
                     return <UserDisplay users={this.state.users} />
                 }}/>
             </Switch>

            {/*Search Component*/}

        </div>
    }
}

const UserDisplay = ((props)=>{
    console.log(props)
        return <div>User something</div>
})
export default UsersRouter
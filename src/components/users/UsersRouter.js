import React,{Component} from 'react';
import apiClient from "../../utils/ApiClient"
import ListComponent from "../ListComponent";
import FormComponent from "../FormComponent";
import "./userRouter.css"
import {InputGroup, FormControl, Button} from "react-bootstrap";

import {Switch, Route, NavLink, useParams, useRouteMatch} from "react-router-dom";
// styles in js
const mainStyle ={
    backgroundColor: "black",
    fontSize: "20px",
    fontColor: "green"
}
class UsersRouter extends Component{
    constructor(props){
        super(props)
        this.state={users: [], query: "", className: ["userrouter"], mainStyle: mainStyle}
        this.onDeleteUserClick = this.onDeleteUserClick.bind(this)
        this.onSearchClick = this.onSearchClick.bind(this)
        this.onCreateUser = this.onCreateUser.bind(this)
        this.onChangeStyles = this.onChangeStyles.bind(this)
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
    onChangeStyles(){
            this.setState({className: ["userRouter","search"]})
            // copy of the object in the state
            {/* WRONG WAY
        let newStyle = this.state.mainStyle;
        newStyle.backgroundColor = "green"
        */}
            let newMainStyle = Object.assign({},this.state.mainStyle)
            // modify
            newMainStyle.backgroundColor = "green"
            // re-assign
            this.setState({mainStyle: newMainStyle})
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
        });
        let classNames = this.state.className.join(' ')

        return <div style={this.state.mainStyle}>
            <br/>
            USERS
            <div className={classNames}>
                <div style={{borderColor: 'black', borderWidth: '2px', borderStyle: 'solid'}}>
                <p>Enter First Name</p>
                    <InputGroup className="mb-3">
                        <FormControl
                            onChange={(event)=>{
                                this.setState({query: event.target.value})
                            }}
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button
                            onClick={this.onSearchClick}
                                variant="outline-secondary">Button</Button>
                        </InputGroup.Append>
                    </InputGroup>
                <textarea onChange={(event)=>{
                    this.setState({query: event.target.value})
                    this.onSearchClick()
                }} />
                <button onClick={this.onSearchClick}>Search</button>
                    <button onClick={this.onChangeStyles}>Change Styles</button>
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
import React,{Component} from 'react';
import apiClient from "../../utils/ApiClient"
import ListComponent from "../ListComponent";
import FormComponent from "../FormComponent";
import {deleteUser, fetchUsers, searchUsers} from "../../actions/userActions";
import "./userRouter.css"
import {InputGroup, FormControl, Button} from "react-bootstrap";

import {Switch, Route, NavLink, useParams, useRouteMatch} from "react-router-dom";
import {connect} from "react-redux";
// styles in js
const mainStyle ={
    backgroundColor: "black",
    fontSize: "20px",
    fontColor: "green"
}
class UsersRedux extends Component{
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
        this.props.dispatch(fetchUsers())
    }
    onDeleteUserClick(index){
        const userId = this.props.users[index].id
        this.props.dispatch(deleteUser(userId))
        // delete the user

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
        this.props.dispatch(searchUsers(this.state.query))
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
        let user_names = this.props.users.map((user)=>{
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
                                   dispatch={this.props.dispatch}
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
function mapStateToProps(state,ownProps) {
    return {users: state.users.users}
}
export default connect(mapStateToProps)(UsersRedux)
import React,{Component} from 'react';
import apiClient from "../../utils/ApiClient"
import ListComponent from "../ListComponent";
import FormComponent from "../FormComponent";
import {deleteUser, fetchUsers, searchUsers} from "../../actions/userActions";
import {InputGroup, FormControl, Button} from "react-bootstrap";

import {Switch, Route, NavLink, useParams, useRouteMatch} from "react-router-dom";
import {connect} from "react-redux";
import {loginUser} from "../../actions/appActions";
// styles in js
const mainStyle ={
    backgroundColor: "black",
    fontSize: "20px",
    fontColor: "green"
}
class Login extends Component{
    constructor(props) {
        super(props)
    }
    render(){
    return <div>Login Screen
        {this.props.loggedIn}
        <textarea />
        <Button
            onClick={()=>{
                this.props.dispatch(loginUser())
            }}
        >Login</Button>
    </div>}
}

function mapStateToProps(state,ownProps){
    return {loggedIn: state.app.loggedIn}
}
export default connect(mapStateToProps)(Login)
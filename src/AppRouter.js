import React, {Component, ReactPropTypes} from 'react';
import {connect} from 'react-redux';

import './App.css';
import Counter from "./components/Counter"
import ToDoList from "./components/ToDoList"
import Clock from "./components/Clock";
import Users from "./components/Users";
import BootstrapDemo from "./components/bootstrap/BootstrapDemo"
import {
    HashRouter,
    BrowserRouter,
    Switch,
    Link,
    NavLink,
    Route,
    Redirect,
} from 'react-router-dom'
import UsersRouter from "./components/users/UsersRouter"
import {Navbar, NavDropdown, Nav, Form, FormControl, Button, Spinner }
from 'react-bootstrap'
import UsersRedux from "./components/usersRedux/UsersConatiner";
import Login from "./components/login/Login";



// state props
class AppRouter extends Component{
  constructor(){
    super();
    /*
    const storeState = this.props.store.getState()
    this.state= {storeState: storeState}
    */
    this.state = {login: true, dummyState: "Value"}
  }

  componentWillReceiveProps(nextProps, nextContext) {
      // callback when we receive new props from parent
      // const storeState = this.nextProps.store.getState()
      // this.setState({storeState: storeState})
  }

    componentDidMount() {
        // window.onerror = function (message, filename, lineno, colno, error) {
        //     console.log(message)
        // };
      let userId = document.getElementById("user")
      //this.props.store.dispatch({type: "MODIFY_USER",data: {key: "VALUE2"}})
  }

    render(){
      console.log(this.props)
        const {dispatch} = this.props
    return (<div>
        {this.props.inProgress? <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>:null}
      <HashRouter>
          <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">React-Tutorial</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link href="/counter"> <NavLink to={"/counter"}>Counter</NavLink></Nav.Link>
                      <Nav.Link href="/todolist"><NavLink to={"/todolist"}>To Do List</NavLink></Nav.Link>
                      <Nav.Link href="/clock">Clock</Nav.Link>
                      <Nav.Link href="/usersRedux">Redux</Nav.Link>
                      <Nav.Link onClick={()=>{
                          this.props.dispatch({type: "LOGOUT"})
                      }}>Logout</Nav.Link>
                      <NavDropdown title="Users" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/usersRouter"><NavLink to={"/usersRouter"}>UsersRouter</NavLink></NavDropdown.Item>
                          <NavDropdown.Item href="/usersRouter/create"><NavLink to={"/usersRouter/create"}>Create</NavLink></NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <h1>{this.props.value}</h1>
          <Button onClick={()=>{
              dispatch({type: "MODIFY_USER",data: {key: "VALUE2"}})
          }}>Click to change store</Button>
        {/*<NavLink to={"/counter"}>Counter</NavLink>&nbsp;*/}
        {/*<NavLink to={"/todolist"}>To Do List</NavLink>&nbsp;*/}
        {/*<NavLink to={"/users"}>Users</NavLink>&nbsp;*/}
        {/*<NavLink to={"/usersRouter"}>UsersRouter</NavLink>&nbsp;*/}
        {/*<NavLink to={"/usersRouter/create"}>Create</NavLink>*/}

        <Switch>
          <Route exact path={"/"} component={Counter}/>
          <Route exact path={"/login"} component={Login}/>
          <Route path={"/counter"} component={Counter}/>
          <Route path={"/todolist"} component={ToDoList}/>
          <Route path={"/clock"} render={()=>{
            if(this.props.loggedIn===false)
              return <Redirect to={"/login"} />
            return <Clock stopClock={()=>{}}/>
          }}/>
          <Route path={"/users"} component={Users}/>
          <Route path={"/usersRouter"} component={UsersRouter}/>
          <Route path={"/bootstrap"} component={BootstrapDemo}/>
            <Route path={"/usersRedux"} component={UsersRedux}/>
        </Switch>
      </HashRouter>

    </div>)
  }
}
// Prop Types

// Default Props
AppRouter.defaultProps={
    defaultValue: "SOMETHING"
};

// pure function
function mapStateToProps(storeState,props){
    // return new properties to be added/edited in the component
    // is to extract only the part of the state that you are worried about

    return {value: storeState.users.key,
            inProgress: storeState.app.inProgress,
            loggedIn: storeState.app.loggedIn}
}
export default connect(mapStateToProps)(AppRouter);

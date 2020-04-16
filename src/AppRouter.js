import React, {Component} from 'react';
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
import {Navbar, NavDropdown, Nav, Form, FormControl, Button }
from 'react-bootstrap'


// state props
class AppRouter extends Component{
  constructor(){
    super();
    this.state = {login: true}

  }
  componentDidMount() {
      let userId = document.getElementById("user")
  }

    render(){
    return (<div>
      <HashRouter>
          <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">React-Tutorial</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link href="/counter"> <NavLink to={"/counter"}>Counter</NavLink></Nav.Link>
                      <Nav.Link href="/todolist"><NavLink to={"/todolist"}>To Do List</NavLink></Nav.Link>
                      <Nav.Link href="/clock">Clock</Nav.Link>
                      <NavDropdown title="Users" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/usersRouter"><NavLink to={"/usersRouter"}>UsersRouter</NavLink></NavDropdown.Item>
                          <NavDropdown.Item href="/usersRouter/create"><NavLink to={"/usersRouter/create"}>Create</NavLink></NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>

        {/*<NavLink to={"/counter"}>Counter</NavLink>&nbsp;*/}
        {/*<NavLink to={"/todolist"}>To Do List</NavLink>&nbsp;*/}
        {/*<NavLink to={"/users"}>Users</NavLink>&nbsp;*/}
        {/*<NavLink to={"/usersRouter"}>UsersRouter</NavLink>&nbsp;*/}
        {/*<NavLink to={"/usersRouter/create"}>Create</NavLink>*/}

        <Switch>
          <Route exact path={"/"} component={Counter}/>
          <Route path={"/counter"} component={Counter}/>
          <Route path={"/todolist"} component={ToDoList}/>
          <Route path={"/clock"} render={()=>{
            if(this.state.login===false)
              return <Redirect to={"/"} />
            return <Clock stopClock={()=>{}}/>
          }}/>
          <Route path={"/users"} component={Users}/>
          <Route path={"/usersRouter"} component={UsersRouter}/>
          <Route path={"/bootstrap"} component={BootstrapDemo}/>
        </Switch>
      </HashRouter>

    </div>)
  }
}

export default AppRouter;

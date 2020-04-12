import React, {Component} from 'react';
import './App.css';
import Counter from "./components/Counter"
import ToDoList from "./components/ToDoList"
import Clock from "./components/Clock";
import Users from "./components/Users";
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


// state props
class AppRouter extends Component{
  constructor(){
    super();
    this.state = {login: true}
  }

  render(){
    return (<div>
      <h1> Navigation </h1>
      <BrowserRouter>

        <NavLink to={"/counter"}>Counter</NavLink>&nbsp;
        <NavLink to={"/todolist"}>To Do List</NavLink>&nbsp;
        <NavLink to={"/users"}>Users</NavLink>&nbsp;
        <NavLink to={"/usersRouter"}>UsersRouter</NavLink>&nbsp;
        <NavLink to={"/usersRouter/create"}>Create</NavLink>
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
        </Switch>
      </BrowserRouter>

    </div>)
  }
}

export default AppRouter;

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
    NavLink,
    Route,
} from 'react-router-dom'
import UsersRouter from "./components/users/UsersRouter";


// state props
class AppRouter extends Component{
  constructor(){
    super();
    this.state = {navigation: "users", clockRunning: false}
    this.stopClock = this.stopClock.bind(this)
  }
  stopClock(flag){
    this.setState({clockRunning: flag})
  }
  render(){
    let component = null;
    switch(this.state.navigation){
      case "counter": component = <Counter counter={3}
                                           decrementButtonText={"DECREASE"}
                                           incrementButtonText={"INCREASE"}/>
                                           break;
      case "ToDoList": component =  <ToDoList/>
                      break;
      case "clock": component = <Clock stopClock={this.stopClock}/>
                  break;
      case "users": component = <Users/>
                break;
      default: component = null;
    }
    return (<div>
      <h1> Navigation </h1>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Counter}/>
          <Route path={"/counter"} component={Counter}/>
          <Route path={"/todolist"} component={ToDoList}/>
          <Route path={"/users"} component={UsersRouter}/>
        </Switch>
      </BrowserRouter>

    </div>)
  }
}

export default AppRouter;

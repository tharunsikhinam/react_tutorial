import React, {Component} from 'react';
import './App.css';
import "./css/main.css"
import Counter from "./components/Counter"
import ToDoList from "./components/ToDoList"
import Clock from "./components/Clock";
import Users from "./components/Users";


// state props
class App extends Component{
  constructor(){
    super()
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
      <h1 className={""}> Navigation </h1>
      <a onClick={()=> this.setState({navigation: "counter"})}> Counter </a>
      <a onClick={()=> this.setState({navigation: "ToDoList"}) }> To-DO List </a>
      <a onClick={()=> this.setState({navigation: "clock"}) }> Clock </a>
      <a onClick={()=> this.setState({navigation: "users"}) }> Users </a>
      {this.state.clockRunning ? <p>RUNNING...</p> : <p>STOPPED</p>}
      {// Turning on or off a component using the ternanry operator
         }
      {/*{this.state.navigation === "counter" ? <div>*/}
      {/*  <Counter counter={3}*/}
      {/*           decrementButtonText={"DECREASE"}*/}
      {/*           incrementButtonText={"INCREASE"}/>*/}
      {/*  <Counter decrementButtonText={"__DECREASE__"}*/}
      {/*           incrementButtonText={"__INCREASE__"}/>*/}
      {/*</div> : this.state.navigation === "ToDoList" ? <ToDoList/> : null }*/}

      {//Turning on and off a component based on switch case
      }
      {component}

    </div>)
  }
}

export default App;

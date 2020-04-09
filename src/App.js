import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"


// state props
class App extends Component{
  constructor()
  {
    super()
  }

  render(){
    return (<div>
      <h1>APP</h1>
      <Counter counter={3}
               decrementButtonText={"DECREASE"}
               incrementButtonText={"INCREASE"}/>
      <Counter decrementButtonText={"__DECREASE__"} incrementButtonText={"__INCREASE__"}/>
    </div>)
  }
}

export default App;

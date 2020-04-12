import React, {Component} from 'react';
import '../App.css';


// state props
class Counter extends Component{
    constructor(props)
    {
        super(props)
        debugger;
        const counter = props.counter ? props.counter: -1
        this.state = {counter: counter, counter2: 0}
        // bind the callback function to class
        this.onDecreaseButtonClick = this.onDecreaseButtonClick.bind(this)
        this.onIncreaseButtonClick = this.onIncreaseButtonClick.bind(this)
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(this.state.counter !== nextProps.counter)
            this.setState({counter: nextProps.counter})
    }

    onDecreaseButtonClick(event){
        this.setState({counter: this.state.counter-1})
    }
    onIncreaseButtonClick(event){
        this.setState({counter: this.state.counter+1})
    }
    render(){
        const {decrementButtonText,incrementButtonText} = this.props
        const dummy = "XX"
        const dummyHTML = <h1>ABC</h1>
        console.log("PROPS",this.props.location.pathname)
        return (<div>
            <h1>{dummy}</h1>
            {dummyHTML}
            <h1>{this.state.counter}</h1>

            <button style={{"backgroundColor": "black","color": "white"}}
                    onClick={function onClick(event){
                        alert("CLICKED ON DECEREASE COUNTER")
                    }}
            >
                Decrease Counter</button>

            <button style={{"backgroundColor": "black","color": "white"}}
                    onClick={(event)=>{
                        alert("CLICKED ON DECEREASE COUNTER ARROW")
                    }}
            >
                Decrease Counter arrow</button>

            <button style={{"backgroundColor": "black","color": "white"}}
                    onClick={this.onDecreaseButtonClick}
            >
                {this.props.decrementButtonText}</button>

            <button
                onClick={this.onIncreaseButtonClick}
            >{incrementButtonText}</button>

            <br/>
            <button onClick={()=>{
                this.props.history.push("/users", {msg: "CAME FROM COUNTER PAGE"})
            }}>GO TO USERS PAGE</button>
        </div>)
    }
}

export default Counter;

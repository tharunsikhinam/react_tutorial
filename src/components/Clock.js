import React,{Component} from 'react'
// Lifecycle methods
class Clock extends  Component{
    constructor(props){
        super(props)
        this.state={time: "00:00:00"}
    }
    componentDidMount(){
        // API CALLS

        this.props.stopClock(true)
        let time = new Date().toISOString()
        this.setState({time: time})

        // interval
        setInterval(()=>{
            let time = new Date().toISOString()
            this.setState({time: time})
        },1000)

        // timeout
        setTimeout(()=>{
            let time = new Date().toDateString()
            this.setState({time: time})
        },5000)
    }
    componentDidUpdate(){

    }
    componentWillUnmount() {
        // notify a parent component
        this.props.stopClock(false)

        // detach those events from component
    }

    render(){
        console.log("Clock ", this.state)
        return <div>
            <h2>CLOCKs</h2>
            {this.state.time}
        </div>
    }
}

export default Clock
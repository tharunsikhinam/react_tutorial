import React, {Component} from 'react';
import ListComponent from './ListComponent'

class ToDoList extends Component {
    constructor(props){
        super(props)
        // can't do API calls' here
        this.state = {list: ["ITEM 1", "ITEM 2"],
                      textboxValue: "" }
        this.onDeleteItemClick = this.onDeleteItemClick.bind(this)
    }
    onDeleteItemClick(index){
        let newList = this.state.list.slice()
        newList.splice(index,1)
        this.setState({list: newList})
    }
    componentDidMount() {
        console.log("TODO LIST COMPONENT MOUNTED")
        // MAKE AN API CALL
        // let results = http.get("todolist.com/getTodoItems")
        // this.setState({list: results})
    }
    componentDidUpdate(){
        console.log("STATE CHANGED")
    }
    componentWillUnmount(){
        console.log("TODO LIST COMPONENT UNMOUNTED")
    }

    render(){
        console.log("State ", this.state)
        console.log("Props ", this.props)
        return <div>
            <h2>To-DO LIst</h2>
            <textarea
                value={this.state.textboxValue}
                onChange={(event)=>{
                console.log(event.target.value)
                this.setState({textboxValue: event.target.value})
            }}
            />
            <button onClick={()=>{
                // if we have array's , to create a copy use the slice () method
                let newList = this.state.list.slice()
                newList.push(this.state.textboxValue)
                this.setState({list: newList })

                //empty the textbox
                this.setState({textboxValue: ""})
            }}>Save</button>
            <ListComponent list={this.state.list}
                           deleteItem={true}
                           onDeleteItemClick={this.onDeleteItemClick}
                           fontSize={"20px"} />
            <br/>
            <ListComponent list={this.state.list}
                           deleteItem={false}
                           fontSize={"20px"} />
        </div>
    }
}

export default ToDoList
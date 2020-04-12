import React,{Component} from 'react';

class FormComponent extends Component {
    constructor(props){
        super(props)
        this.state= {first_name: "", last_name: "", gender: "", email: "",status: ""}
    }
    render() {
        return <div>
            <p>FirstName</p>
            <textarea onChange={(event)=>{
                this.setState({first_name: event.target.value})
            }}/>
            <p>Last name</p>
            <textarea onChange={(event)=>{
                this.setState({last_name: event.target.value})
            }}/>
            <p>Email</p>
            <textarea onChange={(event)=>{
                this.setState({email: event.target.value})
            }}/>
            <p>Gender</p>
            <textarea onChange={(event)=>{
                this.setState({gender: event.target.value})
            }}/>
            <p>Status</p>
            <textarea onChange={(event)=>{
                this.setState({status: event.target.value})
            }}/>
            <button onClick={()=>{
                console.log(this.state)
                // make a callback to parent function
                if(this.props.onSubmit){
                    this.props.onSubmit(this.state)
                }
            }}>Submit</button>
            <button onClick={this.props.onCancel}>Cancel</button>
        </div>
    }
}
export default FormComponent;
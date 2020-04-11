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
            <textarea/>
            <button onClick={()=>{
                console.log(this.state)
                // make a callback to parent function
                if(this.props.onSubmit){
                    this.props.onSubmit(this.state)
                }
            }}>Submit</button>
        </div>
    }
}
export default FormComponent;
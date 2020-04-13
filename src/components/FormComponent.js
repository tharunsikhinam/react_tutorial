import React,{Component} from 'react';

const formFields = ['email','status','gender']
class FormComponent extends Component {
    constructor(props){
        super(props)
        this.state= {first_name: "", last_name: "", gender: "", email: "",status: ""}
    }
    render() {
        let error ={}
        this.props.error.map((err)=>{
            if(!error[err.field])
                error[err.field]=err.message
        })
        console.log(error,this.state)
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
            {error["email"]}
            <p>Gender</p>
            <textarea
                onBlur={()=>{
                    console.log("LEFT GENDER TEXT AREA")
                    if(this.state.gender!="male" && this.state.gender!='female')
                        alert("INVALID genders")
                }}
                onChange={(event)=>{
                this.setState({gender: event.target.value})
            }}/>
            {error["gender"]}
            <p>Status</p>
            <textarea onChange={(event)=>{
                this.setState({status: event.target.value})
            }}/>
            {error["status"]}
            <button onClick={()=>{
                console.log(this.state)
                // make a callback to parent function
                //
                let results = validate(this.state.user)


                if(this.props.onSubmit){
                    this.props.onSubmit(this.state)
                }
            }}>Submit</button>
            <button
                onClick={this.props.onCancel}>Cancel</button>
        </div>
    }
}

function validate(user){
    //do the validation
    if(user['status']!='active')
        return "ERROR"

}
export default FormComponent;
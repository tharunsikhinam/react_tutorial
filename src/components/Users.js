import React,{Component} from 'react';
import apiClient from "../utils/ApiClient"
import ListComponent from "./ListComponent";
import FormComponent from "./FormComponent";
import "./users.css"
class Users extends Component{
    constructor(props){
        super(props)
        this.state={users: [], query: "",error: []}
        this.onDeleteUserClick = this.onDeleteUserClick.bind(this)
        this.onSearchClick = this.onSearchClick.bind(this)
        this.onCreateUser = this.onCreateUser.bind(this)
    }
    componentDidMount(){
        this.refreshUsers()
    }
    refreshUsers(){
        let promise = apiClient.makeAPIRequest("https://gorest.co.in/public-api/users", "GET")
        promise.then((results)=>{
            console.log(results)
            this.setState({users: results.data.result})
        })
    }
    onDeleteUserClick(index){
        const userId = this.state.users[index].id
        // delete the user
        let promise = apiClient.makeAPIRequest("https://gorest.co.in/public-api/users/" + userId,"DELETE")

        promise.then((results)=>{
                this.refreshUsers()
        }).catch((error)=>{
          alert("DELETE UNSUCCESSFULL")
        })
    }
    onSearchClick(){
        let promise = apiClient.makeRequest("https://gorest.co.in/public-api/users?_format=json&access-token=Pyiex5tdmdZcgPCIdKy4VLOPWkMiS5a3d7y1&first_name="+this.state.query, "GET")
        promise.then((results)=>{
            this.setState({users: results.data.result})
        })
    }
    onCreateUser(user){
        // MAKE API CALL
        console.log("IN PARENT COMPONENT",user)
        let promise = apiClient.makeAPIRequest("https://gorest.co.in/public-api/users","POST",user)
        promise.then((results)=>{
            console.log(results)
            if(results.data._meta.code===422){
                // we found errors in validation
                let error = results.data.result
                this.setState({error: error})
            }
            else
                this.setState({error: []})
            this.refreshUsers()
        }).catch((error)=>{
            console.log(error)
        })

        // POST API CALL
            // ON POST API CALL SUCCESS
                // REFRESH USER LIST
    }

    render(){
        console.log("USERS ",this.state,this.props)
        let user_names = this.state.users.map((user)=>{
            return user.first_name
        })

        return <div  >USERS
            {/* FORM COMPONENT*/}
            <p style={{cursor: "pointer"}}
               onClick={()=>this.setState({showForm: true})}
            >Create User</p>
            <div style={{borderColor: 'black', borderWidth: '2px', borderStyle: 'solid'}}>
                {this.state.showForm?
                    <FormComponent
                        error={this.state.error}
                onCancel={()=>{this.setState({showForm: false})}}
                onSubmit={this.onCreateUser}/>:
                    null}
            </div>

            {/*Search Component*/}
            <div style={{borderColor: 'black', borderWidth: '2px', borderStyle: 'solid'}}>
            <p>Enter First Name</p>
            <textarea onChange={(event)=>{
                this.setState({query: event.target.value})
                this.onSearchClick()
            }} />
                <button onClick={this.onSearchClick}>Search</button>
            </div>


            {/*Display*/}
            <div style={{borderColor: 'black', borderWidth: '2px', borderStyle: 'solid'}}>
            <ListComponent list={user_names}
                           deleteItem={true}
                           fontSize={"25px"}
                           onDeleteItemClick={this.onDeleteUserClick} />
            </div>
        </div>
    }
}

export default Users
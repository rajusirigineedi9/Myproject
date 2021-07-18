import React, { Component } from 'react'

export class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
    }

    login=(event)=>{
       event.preventDefault() 
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res=>res.json())
       .then(result=>{result.map(data=>(<p>{data.title}</p>))})
    //     {result.map(user=><p>User</p>)});
    //    if(this.state.username==="admin" && this.state.password==="password"){
    //        alert("login success");
    //    }
    //        else{
    //            alert("login failed");
    //        }
       
    }

    changeUsername=(e)=>{
        this.setState({username:e})
    }
    changePassword=(e)=>{
        this.setState({password:e})
    }
    
    
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <form  onSubmit={this.login}>
                    <label>UserName</label>
                    <input type="text" placeholder="enter name" value={this.state.username} onChange={(e)=>this.changeUsername(e.target.value)}></input> <br></br>
                    <label>Password</label>
                    <input type="text" placeholder="Password" value={this.state.password} onChange={(e)=>this.changePassword(e.target.value)}></input>
                    <br></br>
                    <input type="submit"></input>
                </form>
                
            </div>
        )
    }
}

export default Forms

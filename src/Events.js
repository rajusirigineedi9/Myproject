import React from 'react'

export class Events extends React.Component {
    constructor(props) {
        super(props);
    
        this.state ={
            users: [{name:"raju" },
            {name:"sandy"}]
    
    }
}
   
    render() {
        return (
            <div>
                <ul>
                {this.state.users.map(user=>(
                <li>{user.name}</li>)
                )}
                </ul>
               
                {/* {(this.state.count)=== 2 && "right"}
                <button onClick={this.click}>click me</button> */}
            </div>
        )
    }
}

export default Events

import React, {useState} from 'react'

function UseStateObject() {
    const [name,setName]=useState({firstname:'',secondname:''})
    return (
        
            <form>
                <input type="text" value={name.firstname} onChange={(e)=>setName({...name,firstname:e.target.value})}></input>
                <input type="text" value={name.secondname} onChange={(e)=>setName({...name,secondname:e.target.value})}></input>
                <h2>firstname - {name.firstname}</h2>
           <h2> lastname - {name.secondname}</h2>
            </form>
            
    
    )
}

export default UseStateObject

import React from 'react'
import { useContext } from 'react'
import { userContext } from '../../App'
function CompC() {
    const name = useContext(userContext)
    return (
        <div>
           <h1 style={{color:"white"}}>{name}</h1> 
        </div>
    )
}

export default CompC

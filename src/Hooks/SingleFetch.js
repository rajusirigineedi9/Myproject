import React,{useState,useEffect} from 'react'

function SingleFetch() {
    const [value,setValue]=useState({})
    const [id,setId]=useState(1)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(result=>{setValue(result)
        console.log(result)})
            
        },[id])
    return (
        <div>
            <label>title : </label>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
           <h2>{value.title}</h2> 
        </div>
    )
}

export default SingleFetch

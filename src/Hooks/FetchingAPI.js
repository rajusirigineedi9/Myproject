import React,{useState,useEffect} from 'react'

function FetchingAPI() {
    const [data,setData]=useState([])
    const [count,setCount]=useState(0)

    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(result=>{setData(result)
    console.log(result)})
        
    },[])
    return (
        <div>
            {count}
            <button onClick={()=>setCount(count+1)}>click</button>
            {data.map(post=>(<li>{post.title}</li>))}
        </div>
    )
}

export default FetchingAPI

import React, {useState,useEffect} from 'react'

function UseState() {
    const [count,setCount]= useState(0)
    const [data,setData] = useState("")
    const[title,setTitle]= useState([])

    const eventHandler=(e)=>{
        e.preventDefault();
        alert(data);
    
    }

    useEffect(() => {setTimeout(()=>{fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(result=> setTitle(result))
        
},3000)
    })
    return (
        <div>
           <p> {count}</p>
            <button onClick={()=>setCount(count+1)}>click</button>
             {title.map(tit=>(<li key={tit.id}>{tit.title}  {tit.body}</li>))} 
            {/* <form onSubmit={eventHandler}>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>
            <br></br>
            <input type="submit"></input>
            </form> */}
            
        </div>
    )
}

export default UseState;

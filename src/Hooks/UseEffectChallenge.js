import React, {useState,useEffect} from 'react'

function UseEffectChallenge() {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        const Interval = setInterval(tick,1000)
        return ()=>{
            clearInterval(Interval)
        }
    },[])

    const tick=()=>{
        setCount(count+1)
    }
    return (
        <div>
            {count}
        </div>
    )
}

export default UseEffectChallenge

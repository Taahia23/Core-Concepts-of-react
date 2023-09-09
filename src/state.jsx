import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount  = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const newCount  = count - 1;
        setCount(newCount)
    }
    return(
        <div style={{border: '5px  solid red', padding: '20px', borderRadius: '20px'}}>
            <h1>Counter : {count} </h1>
            <button style={{marginRight: '10px'}} onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
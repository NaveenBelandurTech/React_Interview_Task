import './counter.css'
import {useState} from 'react'


const Counter = () =>{
    const [count,setCount] = useState(0)

 

    const increment = () =>{
       setCount((prevState)=>{
       return   prevState + 1
       })
    }

    const decrement = () =>{
        setCount(prevState => prevState - 1)
    }

   const reset = () =>{
      setCount(0)
   }
    return (
        <div className='counter-container'>
          <h2>Counter:{count && count}</h2>
          <h2>Preview Counter:</h2>
          <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          </div>
         
        </div>
    )
}





export default Counter
import './progress.css'
import {useState} from 'react'

const ProgressBar = () =>{
    const [count,setCount] = useState(0)


    const handleIncrement = () =>{
        if(count >= 100) return setCount(0)
            setCount(count + 20)
    }

    const handleDecrement = () =>{
        if(count <= -100) return setCount(0)
            setCount(count - 20)
        
      
       
    }
    return (
        <>
        <div className='container'>
         <div className='input_bar'>
            <p className='progress_bar' style={{width:count * 5}}></p>
         </div>
         <div className='button_container'>
         <button className='btn' onClick={handleIncrement}>Increment</button>
         <button className='btn' onClick={handleDecrement}>Decrement</button>
         </div>
        </div>
        </>
    )
}





export default ProgressBar

import {useEffect, useRef, useState} from 'react'
import './toogle.css'

const TooglePassword = () =>{
    const [toogle,setToogle] = useState()
    const data = useRef(null)

    useEffect(()=>{
    return () => data.current = ''
    },[])
    return (
        <div className='app_container'>
            <div className='toogle_container'>
             <input type={toogle ? 'text' : 'password'} ref={data}  placeholder='Enter Your Password' id='test'/>
              <span className='icons__' onClick={()=>setToogle(!toogle)}>icons</span>
            </div>
            <p>Password is {toogle ? 'visible' : "Hidden"}</p>
        </div>
    )
}


export default TooglePassword
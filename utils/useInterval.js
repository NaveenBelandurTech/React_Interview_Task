import {useState,useEffect} from 'react'

const useIntervalTask = () =>{
   const [light,setLight] = useState('')

    useEffect(()=>{
         const interval = setInterval(()=>{
             if(light == ''){
            setLight('red')
         }else if(light == 'red'){
            setLight('Yellow')
         }else if(light == 'Yellow'){
            setLight('Green')
         }else{
            setLight('')
         }
         },2000)

         return () =>clearInterval(interval)
    },[light])


    return light
    

}

export default useIntervalTask
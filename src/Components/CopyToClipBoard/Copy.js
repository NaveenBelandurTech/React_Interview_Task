import './copy.css'
import {useEffect, useState} from 'react'


const Copy = () =>{
    const [text,setText] = useState('')
    const [save,setSave] = useState('')

    const handleChange = (e) =>{
         setSave(e.target.value)
    }

    const handleSubmit = () =>{
        
      if(save == ''){
        setText('Value Cannot Be Empty')
      }
      
     
      const DataCopy = async (save) =>{
       try{
        const DataSave = await navigator.clipboard.writeText(save).then(()=>{
            setText('Copied')
        })
        .catch((err)=>{
            setText('Error in Copied')
        })
    
        
       }
       catch(err){
        console.log(err)
       }
      }
      DataCopy(save)


    }

   useEffect(()=>{
   const Result = () =>{
    const t = setTimeout(()=>{
       setText('')
       setSave("")
    },5000)
   }
   Result()

   return () =>clearTimeout(Result)

   },[text])

    return (
        <section className='container__'>
            <div className='width___'>
            <h3>Copy To ClipBoard</h3>
            <p>Click The button to copy to text</p>
            <div className='input_container'>
             <p>Enter Your Text:</p>
             <input type='text' value={save} onChange={handleChange} placeholder='Type Something'/>
             <button onClick={handleSubmit}>Copy</button>
             <p>{text}</p>
            </div>
            </div>

        </section>
    )
}






export default Copy
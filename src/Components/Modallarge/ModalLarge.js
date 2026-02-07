import { ModalSmall } from "./ModalSmall"
import {useState} from 'react'


export const ModalLarge = () => {
    const [modal,setModal] = useState(false)
  return (
    
    <div className='app_container'>
              {modal &&  <div style={{position:'absolute',left:'550px'}}>
            <ModalSmall clicked={setModal} modal={modal}/>
        </div>}
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:"center",position:'relative'}}>
             <h2>Modal Popup</h2>
             <button onClick={()=>setModal(!modal)}>Open Modal</button>
        </div>
  
       
     

    </div>
  )
}

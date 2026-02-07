
import useToogle from '../../../utils/useToogle'
const ButtonCentre = {
   display:'flex',
   flexDirection:'column',
   alignItems: 'center'
}


const ToogleSwitch = () =>{
const [clicked,toogle,random,randomclicked] = useToogle()

    return (
        
        <div className='app_container'>
          
          <div style={ButtonCentre}>
           <button onClick={toogle} className='btn'>{clicked ? "On" : "Off"}</button>
           <p>{random}</p>
           <button className='btn' onClick={randomclicked}>Random</button>
         </div>
        </div>
    )
}


export default ToogleSwitch
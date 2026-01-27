import Banner from "./Banner";
import "./Noti.css";
import { useEffect, useState } from "react";

const Notification = () => {
  const [info, setInfo] = useState("");
  const [Notification,setNotification] = useState([{
    value:''
  }])

const handleClickShow = () =>{
  setInfo('Success')
    setNotification(()=>[
      ...Notification,{value:info}
    ])
}

const hanldeClickError = () =>{
  setInfo("Error")
    setNotification(()=>[
      ...Notification,{value:info}
    ])
}

const handleClickInfo = () =>{
   setInfo("Info")
    setNotification(()=>[
      ...Notification,{value:info}
    ])
}

useEffect(()=>{
 let result = () =>{
  setTimeout(()=>{
    setNotification([{
      value:''
    }])
  },5000)
 }
 result()


  return clearTimeout(result)

},[info])
  return (
    
    <section className='row___'>
      <div className='btn__row'>
      <button onClick={handleClickShow}>Show Success</button>
      <button onClick={hanldeClickError}>Show Error</button>
      <button onClick={handleClickInfo}>Show Info</button>
      </div>
      <div  className='banner__container'>
      {Notification.map((data,i)=>{
        return (
          <div key={i} className='banner__'>
         <Banner  value={data.value} className={data.value} />
         <br/>
         </div>
        )
      })}
      </div>
     
    </section>
  );
};

export default Notification;

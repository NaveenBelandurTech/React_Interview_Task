import './Noti.css'


const Banner = ({value,className}) =>{
    
    return (
       <div className={`banner_${className}`}>
       {value}
       </div>
    )
}





export default Banner
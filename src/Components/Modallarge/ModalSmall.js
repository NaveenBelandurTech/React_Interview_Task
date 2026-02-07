

export const ModalSmall = (props) => {
    const {clicked,modal} = props
   
 

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:"center"}}>
        <div style={{width:'200px',border:'1px solid black',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h2>Modal Header</h2>
            <p>This is the Modal Body</p>
            <button onClick={()=>clicked(!modal)}>Close</button>
        </div>
 
        </div>

  )
}

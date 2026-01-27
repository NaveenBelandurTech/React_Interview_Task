import {useState} from 'react'

const EvenOdd = () =>{
    const [text,setText] = useState({
        count:'',
        title:''
    })



    const handleChange = (e)=>{
      setText({
        count: e.target.value,
        title: ''
      })
    
    }

    const handleSubmit = ()=>{
           if(text.count % 2 == 0){
            setText({
                ...text,
                count:text.count,
                title:"This are the Even Number"
            })
           }else{
            setText({
                ...text,
                count:text.count,
                title:"This are the Odd Number"
            })
           }
           
    }

    return (
        <section className='container_'>
        <div>
        <h3>Even Odd Checker</h3>
        <p>{text.title}</p>
        <input type='text' value={text.count} onChange={handleChange}/>
        <button className='button_' onClick={handleSubmit}>Submit</button>
        </div>
        </section>
    )
}





export default EvenOdd
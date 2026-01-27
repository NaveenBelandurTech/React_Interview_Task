import {useState} from 'react'

const EvenOdd = () =>{
    const [text,setText] = useState({
        count:'',
        title:''
    })



    const handleChange = (e)=>{
            if (e.target.value === '') {
      setText({
        count: '',
        title: 'Cannot be empty'
      })
    } else {
      setText({
        count: e.target.value,
        title: ''
      })
    }
       


          
    }

    const handleSubmit = ()=>{

        if(text.count == ''){
            return setText({title:'cannot be empty'})
        }
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
        <button onClick={handleSubmit}>Submit</button>
        </div>
        </section>
    )
}





export default EvenOdd
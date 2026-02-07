import {useState} from 'react'

const SortList = () => {
    const [item,setItem] = useState('')
    const [finalResult,setFinalResult] = useState([])

    const handleClick = () =>{
        setFinalResult(
            [...finalResult,item]
        )
        setItem('')
    }

    const handleSortAscending = () =>{
      let Result = finalResult.sort()
       setFinalResult([...Result])
       
    }

    const handleSortDeciding = () =>{
      let Result =   finalResult.reverse()
        setFinalResult([...Result])
    }


  return (
    <div className='app_container'>
        <div style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
            <h3>Sortable List</h3>
            <input type='text'  value={item} onChange={(e)=>setItem(e.target.value)}/>
            <div>
                <button onClick={handleClick}>Add Item</button>
                <button onClick={handleSortAscending}>Sort Ascending</button>
                <button onClick={handleSortDeciding}>Sort Deciding</button>
            </div>
            <ul>
            {finalResult&& finalResult?.map((data,i)=>{
                return (
                  <li key={i}>{data}</li>
                )
            })}
            </ul> 
        </div>

    </div>
  )
}

export default SortList
/* Build an input field that automatically saves whatever the user types into localStorage by the name "autosave-text", and restores it even after a page refresh. Include a Clear button to reset both the input and the stored value. */

import { useState} from 'react'


const Autosave = () =>{
    const [title,setTitle] = useState('')

    const handleChange = (e) =>{
      setTitle(e.target.value)

    }

    const handleClick = () =>{
        localStorage.clear()
    }

    const handleSubmit = () =>{
      const r = localStorage.setItem('Title',title)
      setTitle('')
    }



    return (
        
        <section className='container_'>
          <div>
        <h3>Auto Save</h3>
        <p>Auto Save -{localStorage.getItem('Title') && localStorage.getItem('Title')}</p>
        <input type='text' value={title} onChange={handleChange} />
        <button className='button_'onClick={handleSubmit}>Submit</button>
        <button className='button_' onClick={handleClick}>Clear</button>
        </div>
        </section>
    )
}

export default Autosave
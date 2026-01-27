import {useState} from 'react'


const ReadMore = () =>{
    const [textMore,setTextMore] = useState(true)
    const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;

    const handleClick = () =>{
        setTextMore(!textMore)
    }

    return (
        <>
        <section className='container_readMore'>
        <h3>Read More Component</h3>
        <p>{textMore ? `${text.slice(0,100)}...` : text}</p>
        <button className='button_' onClick={handleClick}>{textMore ? 'Read More' : 'Read Less'}</button>
        </section>
        </>
    )
}






export default ReadMore
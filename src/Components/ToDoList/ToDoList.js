import React, { useRef } from "react";
import { useState } from "react";
import './todolist.css'

const ToDoList = () => {
  const [list, setList] = useState("");
  const [data, setData] = useState([]);
  const id = useRef(1);

  const handleChange = (e) => {
    setList(e.target.value);
  };


  const handleDestroy = (id) =>{
    let result = data.filter((d)=>{
        return id !== d.id
    })
    setData(result)
  }

  const handleEdit = (id) =>{
  let result = data.map((data)=>{
     if(data.id == id){
        return {
            ...data,
            status:true
        }
     }
  })
  setData(result)
   
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { id: id.current++, body: list, status: false }]);
    setList("");
  };
  return (
    <section className='container_'>
      <h3>To Do List</h3>
      <form>
        <input type="text" value={list} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        {data.map(({ id, body, status ,i}) => {
          return (
            <div key={id}>
              <li>{body}</li>
              {status ? <p>Finished</p> : <p>Pending</p>}
              <button onClick={()=>handleEdit(id)}>Edit</button>
              <button onClick={()=>handleDestroy(id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default ToDoList;

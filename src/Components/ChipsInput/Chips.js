// In this task, you are asked to create a Chips Input  component that allows users to input a series of tags or keywords. The component will display these tags as "chips" (small labels), which users can add and remove dynamically.

import "./chipsinput.css";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

const ChipsInput = () => {
  const [chips, setChips] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setChips(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setChips("");
      setList([...list, chips]);
    }
  };

  const handleClose = (data) => {
    alert("Are you sure want to delete! !!");
    const filter = list.filter((ele) => {
      return ele !== data;
    });
    setList([...filter]);
  };

  return (
    <div className="form-container">
      <h1>Chips Input</h1>
      <form onKeyDown={handleSubmit} className="form_box">
        <input
          type="text"
          className="form-input"
          value={chips}
          onChange={handleChange}
          placeholder="Enter Your Input"
        />
      </form>
      <ul className="list_container">
        {list.map((data, i) => {
          return (
            <li key={i} className="list-badge">
              {data}
              <span onClick={() => handleClose(data)}>
                {" "}
                <IoClose />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChipsInput;

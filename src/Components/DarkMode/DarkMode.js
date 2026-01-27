import { useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <section className={toggle ? `container_darkMode` : `darkMode__`}>
      <h2>{toggle ? "Light Mode" : "Dark Mode"}</h2>
      <button onClick={handleClick}>
        {toggle ? "Light Mode" : "Dark Mode"}
      </button>
    </section>
  );
};

export default DarkMode;

import { useState, useEffect } from "react";

const CharCount = () => {
  const [count, setCount] = useState("");
  const [charCount, setCharCount] = useState("");
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (charCount.length > count) {
      setText("you have Executed the count");
      setCounter(counter + 1);
    }

    return () => {
      setText("");
      setCounter(0);
    };
  }, [charCount]);

  return (
    <div className="app_container">
      <h2>Character Count</h2>
      <p>Track Your input length with live character warning</p>

      <p>
        MaxLength:
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </p>
      <textarea
        value={charCount}
        onChange={(e) => setCharCount(e.target.value)}
      ></textarea>
      <p>
        {charCount.length}/{count}
      </p>
      <p>
        {text} {counter == 0 ? "" : counter}
      </p>
    </div>
  );
};

export default CharCount;

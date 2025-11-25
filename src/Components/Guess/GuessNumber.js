// Build a "Guess the Number" game where the user tries to guess a randomly generated number between 1 and 100 . The game provides feedback after each guess and tracks the number of attempts.

import "./guessnumber.css";
import { useState, useEffect } from "react";

const GuessNumber = () => {
  const [ran, setRan] = useState("");
  const [guess, setGuess] = useState("");
  const [attemp, setAttempt] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let random = Math.round(Math.random() * 100);
    if (random) {
      setRan(random);
    }
  }, []);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleClick = () => {
    guessValidate(guess);
  };

  function guessValidate(value) {
    if (value == "") {
      setMessage("You Cannot Provide Empty Message");
    } else if (value == ran) {
      setMessage(
        "You Guessed the right number" +
          "Number of Attemps you took to guess" +
          attemp
      );
      let random = Math.round(Math.random() * 100);
      setRan(random);
      setGuess("");
      setAttempt(0);
    } else {
      setAttempt((prev) => prev + 1);
      setGuess("");
    }
  }

  const handleReset = () => {
    setMessage("");
    setGuess("");
    setRan(0);
    setAttempt(0);
  };

  return (
    <>
      {console.log(ran, "random")}
      {console.log(guess, "guess")}
      <div className="guess_container">
        <h1>Guess The Number</h1>
        <input
          type="number"
          className="random_input"
          placeholder="Guess the Number"
          value={guess}
          onChange={handleChange}
        />
        <div className="btn-container">
          <button onClick={handleClick}>Check Guess</button>
          <button onClick={handleReset}>Reset Game</button>
        </div>

        <p>{message || ""}</p>
      </div>
    </>
  );
};

export default GuessNumber;

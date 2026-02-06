import { useRef } from "react";

const Inputtitle = {
  width: "500px",
  border: "1px solid black",
  padding: "10px",
};

const ButtonSubmit = {
  padding: "10px",
  width: "150px",
  cursor: "pointer",
};

export const FocusInput = () => {
  let user = useRef(null);

  const handleClick = () => {
    if (user.current) {
      user.current.focus();
    }
  };

  return (
    <>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "row", gap: "5px" }}
      >
        <input type="text" ref={user} style={Inputtitle} />
        <button onClick={handleClick} style={ButtonSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

import { useState } from "react";

const ColorComponent = () => {
  const [color, setColor] = useState("");
  const [hex, setHex] = useState("");

  const getHexCode = (colorName) => {
    const temp = document.createElement("div");
    temp.style.color = colorName;
    document.body.appendChild(temp);

    const computedColor = getComputedStyle(temp).color;
    document.body.removeChild(temp);

    const rgbToHex = (rgb) => {
      const values = rgb.match(/\d+/g);
      if (!values) return "";
      return (
        "#" +
        values
          .map((val) => Number(val).toString(16).padStart(2, "0"))
          .join("")
      );
    };

    return rgbToHex(computedColor);
  };

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setColor(value);

    if (value === "") {
      setHex("");
      return;
    }

    const hexCode = getHexCode(value);
    setHex(hexCode);
  };

  return (
    <div className="app_container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <h2>Color Explorer</h2>

        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="Enter color name (red, blue...)"
          className="formInput"
        />

        {hex && <p>HEX Code: <strong>{hex}</strong></p>}
      </div>

      <br />

      <div className="card">
        <p
          style={{
            backgroundColor: color,
            width: "150px",
            height: "150px",
            border: "1px solid #ccc",
          }}
        />
      </div>
    </div>
  );
};

export default ColorComponent;

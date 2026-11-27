import { useState } from "react";

export default function ColorChangerWidget() {
  const [inputColor, setInputColor] = useState("");
  const [color, setColor] = useState("black");

  function updateColor() {
    const newColor = inputColor.trim();

    if (newColor !== "") {
      setColor(newColor);
      setInputColor("");
    }
  }

  return (
    <section>
      <h1 style={{ color }}>{color}</h1>

      <input
        type="text"
        value={inputColor}
        onChange={(event) => setInputColor(event.target.value)}
        placeholder="Enter a color name"
      />

      <button onClick={updateColor}>update</button>
    </section>
  );
}

import { useState } from "react";

export default function RGBSliderWidget() {
  const [color, setColor] = useState({
    red: 128,
    green: 128,
    blue: 128,
  });

  function updateColor(channel, value) {
    setColor((currentColor) => ({
      ...currentColor,
      [channel]: Number(value),
    }));
  }

  return (
    <section className="rgb-widget">
      <h2>RGB Slider</h2>

      <div
        className="color-box"
        style={{
          backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
        }}
      />

      <p>
        RGB values: {color.red}, {color.green}, {color.blue}
      </p>

      <label>
        Red: {color.red}
        <input
          type="range"
          min="0"
          max="255"
          value={color.red}
          onChange={(event) => updateColor("red", event.target.value)}
        />
      </label>

      <label>
        Green: {color.green}
        <input
          type="range"
          min="0"
          max="255"
          value={color.green}
          onChange={(event) => updateColor("green", event.target.value)}
        />
      </label>

      <label>
        Blue: {color.blue}
        <input
          type="range"
          min="0"
          max="255"
          value={color.blue}
          onChange={(event) => updateColor("blue", event.target.value)}
        />
      </label>
    </section>
  );
}

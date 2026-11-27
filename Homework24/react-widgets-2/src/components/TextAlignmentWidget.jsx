import { useState } from "react";

export default function TextAlignmentWidget() {
  const [alignment, setAlignment] = useState("left");

  return (
    <div>
      <p style={{ textAlign: alignment }}>This text changes alignment.</p>

      <button
        className={alignment === "left" ? "highlighted" : ""}
        onClick={() => setAlignment("left")}
      >
        left
      </button>
      <button
        className={alignment === "center" ? "highlighted" : ""}
        onClick={() => setAlignment("center")}
      >
        center
      </button>
      <button
        className={alignment === "right" ? "highlighted" : ""}
        onClick={() => setAlignment("right")}
      >
        right
      </button>
    </div>
  );
}

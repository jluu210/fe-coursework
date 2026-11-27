import { useState } from "react";

export default function FontSizerWidget() {
  const [fontSize, setFontSize] = useState(20);

  function growText() {
    setFontSize((currentSize) => Math.min(currentSize + 5, 100));
  }

  function shrinkText() {
    setFontSize((currentSize) => Math.max(currentSize - 5, 0));
  }

  return (
    <div>
      <h2 style={{ fontSize: `${fontSize}px` }}>
        This heading's font size is: {fontSize}px
      </h2>

      <button onClick={growText}>Grow</button>
      <button onClick={shrinkText}>Shrink</button>
    </div>
  );
}

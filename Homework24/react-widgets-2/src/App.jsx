import FontSizerWidget from "./components/FontSizerWidget";
import TextAlignmentWidget from "./components/TextAlignmentWidget";
import RGBSliderWidget from "./components/RGBSliderWidget";
import MountClock from "./components/ClockWidget";
import ColorChangerWidget from "./components/ColorChangeWidget";

import "./App.css";
//import MountClock from "./components/ClockWidget";

export default function App() {
  return (
    <div>
      <FontSizerWidget></FontSizerWidget>
      <TextAlignmentWidget></TextAlignmentWidget>
      <RGBSliderWidget></RGBSliderWidget>
      <MountClock />
      <ColorChangerWidget />
    </div>
  );
}

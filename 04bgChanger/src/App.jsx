import { useState } from "react";
import Switches from "./Switches";

function App() {
  const [color, setColor] = useState("Olive");

  const colorsArray = [
    "Red",
    "Green",
    "Yellow",
    "Blue",
    "Olive",
    "Gray",
    "Pink",
    "Purple",
    "Lavender",
    "White",
    "Black",
  ];
  return (
    <div
      className="w-full h-screen duration-200 relative"
      style={{ backgroundColor: color }}
    >
      <Switches colorsArray={colorsArray} setColor={setColor} />
    </div>
  );
}

export default App;

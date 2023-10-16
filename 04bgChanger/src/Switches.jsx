import React from "react";

const Switches = ({ colorsArray, setColor }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm  absolute bottom-5 w-full p-4 flex items-center justify-center space-x-3">
      {colorsArray.map((color) => (
        <button
          className="px-3 py-1 rounded-full shadow-lg"
          onClick={() => setColor(color)}
          style={{ backgroundColor: color }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default Switches;

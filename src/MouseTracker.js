import React, { useState, useEffect } from "react";
const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({
    clientX: 0,
    clientY: 0,
  });
  const [mouseDown, setMouseDown] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      setMouseDown(true);
    });
    window.addEventListener("mouseup", (e) => {
      setMouseDown(false);
    });
  }, [isLoaded]);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMousePosition({ clientX: e.clientX, clientY: e.clientY });
      console.log(mousePosition);
    });
  }, [mouseDown]);
  return (
    <span className="mouse-tracker">
      {(mousePosition.clientX, mousePosition.clientY)}
      <button onClick={setIsLoaded(true)}> Click Me </button>
    </span>
  );
};
export default MouseTracker;

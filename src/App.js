import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import {
  Environment,
  OrbitControls,
  Stars,
  PerspectiveCamera,
} from "@react-three/drei";
import Model from "./NewModel";
import Overlay from "./Overlay";
import MouseTracker from "./MouseTracker";

// const HtmlBody = () => {
//   return (
//     <Html>
//       <div className="logo-container">
//         <img className="logo" height="200px" src={clubLogo} />
//       </div>
//     </Html>
//   );
// };

export default function App() {
  function Loader() {
    const { progress } = useProgress();
    return (
      <Html className="loader" center>
        {progress} % loaded
      </Html>
    );
  }

  const overlay = useRef();
  const myCamera = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  return (
    <>
      <Canvas
        shadows
        onCreated={(state) => state.events.connect(overlay.current)}
        raycaster={{
          computeOffsets: ({ clientX, clientY }) => ({
            offsetX: clientX,
            offsetY: clientY,
          }),
        }}
      >
        <ambientLight intensity={1} />
        <Suspense fallback={<Loader />}>
          <PerspectiveCamera ref={myCamera} position={[5, -10, -10]}>
            <OrbitControls camera={myCamera.current} />
            <Stars />
            <Model scroll={scroll} scale={0.4} />
            <Environment preset="city" />
          </PerspectiveCamera>
        </Suspense>
      </Canvas>

      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  );
}

"use client";

import Noise from "./components/Noise";
import ASCIIText from "./components/ASCIIText";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BlueButton from "./components/BlueButton";
import RedButton from "./components/RedButton";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden">

      {/* TOP LAYER: Noise */}
      <div className="pointer-events-none absolute inset-0 z-30">
        <Noise
          patternSize={500}
          patternScaleX={5}
          patternScaleY={5}
          patternRefreshInterval={1}
          patternAlpha={25}
        />
      </div>

      {/* MIDDLE LAYER: “Page not found” */}
      <div className="absolute z-20 text-center">
        <p
          className="mt-6 text-9xl font-mono"
          style={{ color: "#bbff22" }}
        >
          Page not found
        </p>
      </div>

      {/* BOTTOM VISUAL LAYER: ASCII “404” */}
      <div className="absolute inset-0 z-10">
        <ASCIIText
          text="404"
          asciiFontSize={8}
          textFontSize={200}
          enableWaves={true}
        />
      </div>

      {/* BUTTONS (same position as before, now with 3D models) */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-8 z-[35]">
        <Canvas
          style={{ width: 150, height: 150 }}
          camera={{ position: [0, 2, 5] }}
        >
          {/* Lighting */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[-5, -5, 5]} intensity={1.5} />

          <BlueButton scale={1.6} />

          <OrbitControls enableZoom={false} />
        </Canvas>

        <Canvas
          style={{ width: 150, height: 150 }}
          camera={{ position: [0, 2, 5] }}
        >
          {/* Lighting */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[-5, -5, 5]} intensity={1.5} />

          <RedButton scale={1.6} />

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}

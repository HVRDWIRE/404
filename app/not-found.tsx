"use client";

import Noise from "./components/Noise";
import ASCIIText from "./components/ASCIIText";
import PillButton from "./components/PillButton";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden">

      {/* ASCII 404 background (LOWER layer) */}
      <div className="absolute inset-0 z-0">
        <ASCIIText
          text="404"
          asciiFontSize={8}
          textFontSize={200}
          enableWaves={true}
        />
      </div>

      {/* Page text (ABOVE ASCII) */}
      <div className="absolute top-20 w-full text-center z-20">
        <p className="text-9xl font-mono" style={{ color: '#bbff22' }}>
          Page not found
        </p>
      </div>

      {/* Noise on VERY TOP layer */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      >
        <Noise
          patternSize={500}
          patternScaleX={5}
          patternScaleY={5}
          patternRefreshInterval={1}
          patternAlpha={25}
        />
      </div>

      {/* PILL BUTTONS – same position as before */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-8 z-40">

        {/* BLUE → return home */}
        <PillButton
          modelPath="/assets/models/blue.fbx"
          link="https://jæk.com"
        />

        {/* RED → resume */}
        <PillButton
          modelPath="/assets/models/red.fbx"
          link="https://jæk.com/resume"
        />

      </div>
    </div>
  );
}

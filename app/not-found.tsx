"use client";
import Noise from "./components/Noise";
import ASCIIText from "./components/ASCIIText";

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
      {/* MIDDLE LAYER: "Page not found" */}
      <div className="absolute z-20 text-center">
        <p
          className="mt-6 text-9xl font-mono"
          style={{ color: "#bbff22" }}
        >
          Page not found
        </p>
      </div>
      {/* BOTTOM VISUAL LAYER: ASCII "404" */}
      <div className="absolute inset-0 z-10">
        <ASCIIText
          text="404"
          asciiFontSize={8}
          textFontSize={200}
          enableWaves={true}
        />
      </div>
    </div>
  );
}

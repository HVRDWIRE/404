"use client";
import Noise from './components/Noise'

<div style={{width: '600px', height: '400px', position: 'relative', overflow: 'hidden'}}>
  <Noise
    patternSize={500}
    patternScaleX={5}
    patternScaleY={5}
    patternRefreshInterval={1}
    patternAlpha={25}
  />
</div>

import ASCIIText from "./components/ASCIIText";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        <ASCIIText
          text="404"
          asciiFontSize={8}
          textFontSize={200}
          enableWaves={true}
        />
      </div>

      <div className="relative z-10 text-center">
        <p className="mt-6 text-4xl" style={{ color: '#bbff22' }}>Page not found</p>
      </div>
    </div>
  );
}

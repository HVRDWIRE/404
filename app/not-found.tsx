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
  <p className="mt-6 text-9xl font-mono" style={{ color: '#bbff22' }}>
    Page not found
  </p>
</div>

      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-8 z-10">
  <a 
    href="https://jæk.com" 
    className="px-8 py-4 text-3xl font-mono bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
    style={{ color: '#bbff22' }}
  >
    RETURN HOME
  </a>
  <a 
    href="https://jæk.com/resume" 
    className="px-8 py-4 text-3xl font-mono bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
    style={{ color: '#bbff22' }}
  >
    VIEW RESUME
  </a>
</div>
      
    </div>
  );
}

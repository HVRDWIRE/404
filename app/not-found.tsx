"use client";
import Noise from './components/Noise';
import ASCIIText from "./components/ASCIIText";
import PillButton from "./components/PillButton";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden">

      <div style={{width: '600px', height: '400px', position: 'relative', overflow: 'hidden'}}>
        <Noise
          patternSize={500}
          patternScaleX={5}
          patternScaleY={5}
          patternRefreshInterval={1}
          patternAlpha={25}
        />
      </div>

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

        <PillButton
          modelPath="/assets/models/blue.fbx"
          link="https://jæk.com"
        />

        <PillButton
          modelPath="/assets/models/red.fbx"
          link="https://jæk.com/resume"
        />

      </div>
    </div>
  );
}

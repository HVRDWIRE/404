"use client";

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
        <p className="mt-6 text-zinc-500">Page not found</p>
      </div>
    </div>
  );
}

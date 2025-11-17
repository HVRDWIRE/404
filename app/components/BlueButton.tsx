"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function RedButton({ 
  buttonColor,
  textColor,
  glowColor,
  textSize,
  textThickness,
  letterSpacing,
  textRotation,
  scale = 1 
}) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  const text = "EXPLORE MORE  ";
  const radius = 0.8;
  const totalAngle = Math.PI * 2;
  const letters = text.split("");
  const angleStep = (totalAngle / letters.length) * letterSpacing;

  return (
    <group ref={meshRef} scale={2.6} rotation={[-Math.PI / 4, 0, 0]}>
      {/* Pill-shaped button */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial 
          color={buttonColor}
          metalness={0.6} 
          roughness={0.3}
          emissive={buttonColor}
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh position={[0, 0.75, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={buttonColor}
          metalness={0.6} 
          roughness={0.3}
          emissive={buttonColor}
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh position={[0, -0.75, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={buttonColor}
          metalness={0.6} 
          roughness={0.3}
          emissive={buttonColor}
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Curved 3D Text */}
      {letters.map((letter, i) => {
        const angle = angleStep * i;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        
        return (
          <group 
            key={i} 
            position={[x, 0, z]} 
            rotation={[0, angle + Math.PI + textRotation, 0]}
          >
            <Center>
              <Text3D
                font="/fonts/helvetiker_regular.typeface.json"
                size={textSize}
                height={textThickness}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.01}
                bevelSize={0.01}
                bevelSegments={5}
              >
                {letter}
                <meshStandardMaterial 
                  color={textColor}
                  emissive={glowColor}
                  emissiveIntensity={0.5}
                  metalness={0.3}
                  roughness={0.4}
                />
              </Text3D>
            </Center>
          </group>
        );
      })}
    </group>
  );
}

export default function ButtonControls() {
  const [buttonColor, setButtonColor] = useState("#ff0044");
  const [textColor, setTextColor] = useState("#ffffff");
  const [glowColor, setGlowColor] = useState("#bbff22");
  const [textSize, setTextSize] = useState(0.14);
  const [textThickness, setTextThickness] = useState(0.15);
  const [letterSpacing, setLetterSpacing] = useState(1);
  const [textRotation, setTextRotation] = useState(0);

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      {/* Controls Panel */}
      <div className="bg-gray-800 p-6 shadow-lg border-b border-gray-700">
        <h2 className="text-white text-2xl font-bold mb-4">Button Controls</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Colors Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg border-b border-gray-600 pb-2">Colors</h3>
            
            <div>
              <label className="text-white text-sm block mb-2">Button Color</label>
              <div className="flex gap-2">
                <input 
                  type="color" 
                  value={buttonColor}
                  onChange={(e) => setButtonColor(e.target.value)}
                  className="w-20 h-10 rounded cursor-pointer"
                />
                <input 
                  type="text" 
                  value={buttonColor}
                  onChange={(e) => setButtonColor(e.target.value)}
                  className="flex-1 bg-gray-700 text-white px-3 rounded border border-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm block mb-2">Text Color</label>
              <div className="flex gap-2">
                <input 
                  type="color" 
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-20 h-10 rounded cursor-pointer"
                />
                <input 
                  type="text" 
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="flex-1 bg-gray-700 text-white px-3 rounded border border-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm block mb-2">Text Glow Color</label>
              <div className="flex gap-2">
                <input 
                  type="color" 
                  value={glowColor}
                  onChange={(e) => setGlowColor(e.target.value)}
                  className="w-20 h-10 rounded cursor-pointer"
                />
                <input 
                  type="text" 
                  value={glowColor}
                  onChange={(e) => setGlowColor(e.target.value)}
                  className="flex-1 bg-gray-700 text-white px-3 rounded border border-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Text Size Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg border-b border-gray-600 pb-2">Text Size</h3>
            
            <div>
              <label className="text-white text-sm block mb-2">
                Text Size: {textSize.toFixed(2)}
              </label>
              <div className="flex gap-2 items-center">
                <input 
                  type="range" 
                  min="0.05" 
                  max="0.25" 
                  step="0.01"
                  value={textSize}
                  onChange={(e) => setTextSize(parseFloat(e.target.value))}
                  className="flex-1"
                />
                <input 
                  type="number" 
                  min="0.05" 
                  max="0.25" 
                  step="0.01"
                  value={textSize}
                  onChange={(e) => setTextSize(parseFloat(e.target.value))}
                  className="w-20 bg-gray-700 text-white px-2 py-1 rounded border border-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm block mb-2">
                Text Thickness: {textThickness.toFixed(2)}
              </label>
              <div className="flex gap-2 items-center">
                <input 
                  type="range" 
                  min="0.05" 
                  max="0.3" 
                  step="0.01"
                  value={textThickness}
                  onChange={(e) => setTextThickness(parseFloat(e.target.value))}
                  className="flex-1"
                />
                <input 
                  type="number" 
                  min="0.05" 
                  max="0.3" 
                  step="0.01"
                  value={textThickness}
                  onChange={(e) => setTextThickness(parseFloat(e.target.value))}
                  className="w-20 bg-gray-700 text-white px-2 py-1 rounded border border-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Text Positioning Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg border-b border-gray-600 pb-2">Text Positioning</h3>
            
            <div>
              <label className="text-white text-sm block mb-2">
                Letter Spacing: {letterSpacing.toFixed(2)}
              </label>
              <div className="flex gap-2 items-center">
                <input 
                  type="range" 
                  min="0.5" 
                  max="1.5" 
                  step="0.05"
                  value={letterSpacing}
                  onChange={(e) => setLetterSpacing(parseFloat(e.target.value))}
                  className="flex-1"
                />
                <input 
                  type="number" 
                  min="0.5" 
                  max="1.5" 
                  step="0.05"
                  value={letterSpacing}
                  onChange={(e) => setLetterSpacing(parseFloat(e.target.value))}
                  className="w-20 bg-gray-700 text-white px-2 py-1 rounded border border-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm block mb-2">
                Letter Rotation: {(textRotation * (180 / Math.PI)).toFixed(0)}°
              </label>
              <div className="flex gap-2 items-center">
                <input 
                  type="range" 
                  min={-Math.PI} 
                  max={Math.PI} 
                  step="0.1"
                  value={textRotation}
                  onChange={(e) => setTextRotation(parseFloat(e.target.value))}
                  className="flex-1"
                />
                <input 
                  type="number" 
                  min={-180} 
                  max={180} 
                  step="5"
                  value={(textRotation * (180 / Math.PI)).toFixed(0)}
                  onChange={(e) => setTextRotation(parseFloat(e.target.value) * (Math.PI / 180))}
                  className="w-20 bg-gray-700 text-white px-2 py-1 rounded border border-gray-600"
                />
              </div>
            </div>

            <button 
              onClick={() => {
                setButtonColor("#ff0044");
                setTextColor("#ffffff");
                setGlowColor("#bbff22");
                setTextSize(0.14);
                setTextThickness(0.15);
                setLetterSpacing(1);
                setTextRotation(0);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="flex-1">
        <Canvas
          shadows
          camera={{ position: [0, 0, 8], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <RedButton 
            buttonColor={buttonColor}
            textColor={textColor}
            glowColor={glowColor}
            textSize={textSize}
            textThickness={textThickness}
            letterSpacing={letterSpacing}
            textRotation={textRotation}
          />
          
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
}

"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

export default function RedButton({ scale = 1 }: { scale?: number }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  // Create curved text by positioning individual letters
  const text = "EXPLORE MORE";
  const radius = 0.8; // Distance from center
  const totalAngle = Math.PI * 0.8; // Spread across 144 degrees
  const letters = text.split("");
  const angleStep = totalAngle / (letters.length - 1);

  return (
    <group ref={meshRef} scale={2.6}> {/* Doubled from 1.3 to 2.6 */}
      {/* Pill-shaped button */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial 
          color="#ff0044" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#cc0033"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh position={[0, 0.75, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#ff0044" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#cc0033"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh position={[0, -0.75, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#ff0044" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#cc0033"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Curved 3D Text - each letter positioned on a curve */}
      {letters.map((letter, i) => {
        const angle = -totalAngle / 2 + angleStep * i;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        
        return (
          <group key={i} position={[x, 0, z]} rotation={[0, -angle, 0]}>
            <Center>
              <Text3D
                font="/fonts/helvetiker_regular.typeface.json"
                size={0.12}
                height={0.15} // Increased thickness/extrusion
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.01}
                bevelSize={0.01}
                bevelSegments={5}
              >
                {letter}
                <meshStandardMaterial 
                  color="#ffffff" 
                  emissive="#bbff22"
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

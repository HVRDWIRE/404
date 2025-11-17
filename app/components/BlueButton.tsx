"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

export default function RedButton({ scale = 1 }: { scale?: number }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * -0.5; // Reversed direction
    }
  });

  // Create curved text by positioning individual letters
  const text = "EXPLORE MORE  "; // Added double space at end to create gap
  const radius = 0.4; // Distance from center (halved from 0.8)
  const totalAngle = Math.PI * 2; // Full circle (360 degrees)
  const letters = text.split("");
  const angleStep = totalAngle / letters.length;

  return (
    <group ref={meshRef} scale={2.6} rotation={[-Math.PI / 4, 0, 0]}> {/* Tilted back 45 degrees */}
      {/* Pill-shaped button */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial 
          color="#00ffff" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#00cccc"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh position={[0, 0.75, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#00ffff" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#00cccc"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh position={[0, -0.75, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#00ffff" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#00cccc"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Curved 3D Text - each letter positioned on a curve */}
      {letters.map((letter, i) => {
        const angle = angleStep * i;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        
        return (
          <group key={i} position={[x, 0, z]} rotation={[0, angle + Math.PI, 0]} scale={[1, 1, -1]}>
            <Center>
              <Text3D
                font="/fonts/helvetiker_regular.typeface.json"
                size={0.28} // Doubled from 0.14
                height={0.15}
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

"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function RedButton({ scale = 1 }: { scale?: number }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Pill-shaped button using capsule geometry */}
      <mesh castShadow receiveShadow>
        {/* Main cylinder body */}
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial 
          color="#ff0044" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#cc0033"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Top sphere cap */}
      <mesh position={[0, 0.75, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#ff0044" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#cc0033"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Bottom sphere cap */}
      <mesh position={[0, -0.75, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#ff0044" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#cc0033"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

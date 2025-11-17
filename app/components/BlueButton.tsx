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

  return (
    <group ref={meshRef} scale={3}>
      {/* Pill-shaped button */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial 
          color="#0000ff" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#00ffff"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh position={[0, 0.75, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#0000ff" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#00ffff"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh position={[0, -0.75, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#0000ff" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#00ffff"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* 3D Text wrapped around pill */}
      <Center position={[0, 0, 0.6]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.5}
          curveSegments={12}
        >
          EXPLORE
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#bbff22"
            emissiveIntensity={0.5}
          />
        </Text3D>
      </Center>

      <Center position={[0, -0.3, 0.6]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.05}
          curveSegments={12}
        >
          MORE
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#bbff22"
            emissiveIntensity={0.5}
          />
        </Text3D>
      </Center>
    </group>
  );
}

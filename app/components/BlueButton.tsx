"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useFBX } from "@react-three/drei";
import * as THREE from "three";

export default function BlueButton({ scale = 1 }: { scale?: number }) {
  const fbx = useFBX("/blue.fbx");
  const meshRef = useRef<THREE.Group>(null);

  // Optional: Add rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={fbx} scale={scale} />
    </group>
  );
}

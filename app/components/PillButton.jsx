"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

export default function PillButton({ modelPath, link }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0.5, 3);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const light = new THREE.HemisphereLight(0xffffff, 0x222222, 1.4);
    scene.add(light);

    const loader = new FBXLoader();

    let model = null;
    let isHover = false;

    loader.load(modelPath, (fbx) => {
      model = fbx;
      model.rotation.y = 0;
      model.scale.set(0.01, 0.01, 0.01);
      scene.add(model);
      animate();
    });

    function animate() {
      requestAnimationFrame(animate);

      if (model && !isHover) {
        model.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    }

    const handleEnter = () => {
      isHover = true;
      if (model) model.rotation.y = 0;
    };

    const handleLeave = () => {
      isHover = false;
    };

    const handleClick = () => {
      window.location.href = link;
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);
    container.addEventListener("click", handleClick);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
      container.removeEventListener("click", handleClick);
      renderer.dispose();
    };
  }, [modelPath, link]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "200px",
        height: "200px",
        cursor: "pointer"
      }}
    />
  );
}

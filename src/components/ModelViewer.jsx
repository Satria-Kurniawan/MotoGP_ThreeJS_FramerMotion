/* eslint-disable react/prop-types */
import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "./CanvasLoader";

export default function ModelViewer({ modelPath }) {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasRef.current.appendChild(renderer.domElement);

    return () => {
      renderer.dispose();
    };
  }, []);

  const Model = () => {
    const { scene } = useGLTF(modelPath);

    return (
      <mesh
        scale={isMobile ? 23 : 25}
        position={[0, -2, 0]}
        rotation={[0, -2.4, 0]}
      >
        <primitive object={scene} />
        <ambientLight intensity={0.5} />
        <hemisphereLight intensity={0.3} groundColor="#ffffff" />
        <spotLight
          position={[-20, 50, 10]}
          angle={Math.PI / 6}
          penumbra={0.2}
          intensity={1.5}
          castShadow
        />
        <pointLight intensity={0.8} />
      </mesh>
    );
  };

  return (
    <Canvas ref={canvasRef}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // autoRotate={true}
        />
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CoreCapabilitiesShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.2), []);
  const material = useMemo(() => 
    new THREE.MeshBasicMaterial({ color: "#00FF66", wireframe: true }), 
    []
  );
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.006;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[5, 0, 0]} scale={0.8} geometry={geometry} material={material} />
  );
};

const CoreCapabilities3D = () => {
  return (
    <div className="absolute top-0 right-0 w-full h-full opacity-30 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]}
      >
        <CoreCapabilitiesShape />
      </Canvas>
    </div>
  );
};

export default CoreCapabilities3D;
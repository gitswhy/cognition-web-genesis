import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Optimized Wireframe Shape Component
const OptimizedWireframeShape = ({ position, geometryType, color, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Memoize geometry to prevent recreation
  const geometry = useMemo(() => {
    switch (geometryType) {
      case 'cube': return new THREE.BoxGeometry(1, 1, 1);
      case 'octahedron': return new THREE.OctahedronGeometry(1);
      case 'icosahedron': return new THREE.IcosahedronGeometry(1);
      default: return new THREE.BoxGeometry(1, 1, 1);
    }
  }, [geometryType]);

  // Memoize material to prevent recreation
  const material = useMemo(() => 
    new THREE.MeshBasicMaterial({ color, wireframe: true }), 
    [color]
  );
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.rotation.y += 0.008 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={0.6} geometry={geometry} material={material} />
  );
};

// Simplified 3D Scene with fewer shapes
const OptimizedScene3D = () => {
  return (
    <>
      <OptimizedWireframeShape 
        position={[-5, 1, -1]} 
        geometryType="cube"
        color="#00FF66" 
        speed={1} 
      />
      
      <OptimizedWireframeShape 
        position={[-4, -1, 1]} 
        geometryType="octahedron"
        color="#00D4FF" 
        speed={0.8} 
      />
      
      <OptimizedWireframeShape 
        position={[-6, -2, 2]} 
        geometryType="icosahedron"
        color="#00FF66" 
        speed={1.2} 
      />
      
      <OptimizedWireframeShape 
        position={[-3, 2, -2]} 
        geometryType="cube"
        color="#00D4FF" 
        speed={0.6} 
      />
    </>
  );
};

// Optimized Wireframe3D Component
const Wireframe3D = () => {
  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: false, // Disable antialiasing for better performance
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]} // Limit device pixel ratio for performance
        performance={{ min: 0.5 }} // Auto-adjust quality based on performance
      >
        <OptimizedScene3D />
      </Canvas>
    </div>
  );
};

export default Wireframe3D;
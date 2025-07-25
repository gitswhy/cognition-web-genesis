import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Enhanced Wireframe Shape Component with varied behaviors
const EnhancedWireframeShape = ({ position, geometryType, color, speed = 1, animationType = 'rotate', scale = 0.6 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Memoize geometry to prevent recreation
  const geometry = useMemo(() => {
    switch (geometryType) {
      case 'cube': return new THREE.BoxGeometry(1, 1, 1);
      case 'octahedron': return new THREE.OctahedronGeometry(1);
      case 'icosahedron': return new THREE.IcosahedronGeometry(1);
      case 'torus': return new THREE.TorusGeometry(0.8, 0.3, 16, 100);
      case 'sphere': return new THREE.SphereGeometry(0.8, 32, 16);
      case 'tetrahedron': return new THREE.TetrahedronGeometry(1);
      case 'dodecahedron': return new THREE.DodecahedronGeometry(0.8);
      case 'cone': return new THREE.ConeGeometry(0.8, 1.5, 8);
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
      const time = state.clock.elapsedTime;
      
      switch (animationType) {
        case 'rotate':
          meshRef.current.rotation.x += 0.005 * speed;
          meshRef.current.rotation.y += 0.008 * speed;
          break;
        case 'orbit':
          meshRef.current.rotation.x += 0.003 * speed;
          meshRef.current.rotation.z += 0.006 * speed;
          meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.3) * 0.5;
          meshRef.current.position.z = position[2] + Math.sin(time * speed * 0.3) * 0.5;
          break;
        case 'float':
          meshRef.current.rotation.y += 0.004 * speed;
          meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.4) * 0.4;
          break;
        case 'wobble':
          meshRef.current.rotation.x += 0.002 * speed;
          meshRef.current.rotation.y += 0.005 * speed;
          meshRef.current.rotation.z += 0.003 * speed;
          meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.6) * 0.2;
          break;
        case 'spin':
          meshRef.current.rotation.z += 0.01 * speed;
          meshRef.current.rotation.y += 0.003 * speed;
          break;
        default:
          meshRef.current.rotation.x += 0.005 * speed;
          meshRef.current.rotation.y += 0.008 * speed;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={geometry} material={material} />
  );
};

// Enhanced 3D Scene with strategic positioning
const EnhancedScene3D = () => {
  return (
    <>
      {/* Hero section - top area, positioned to not interfere with text */}
      <EnhancedWireframeShape 
        position={[-6, 3, -2]} 
        geometryType="cube"
        color="#00FF66" 
        speed={0.8}
        animationType="float"
        scale={0.4}
      />
      
      <EnhancedWireframeShape 
        position={[4, 4, -3]} 
        geometryType="torus"
        color="#00D4FF" 
        speed={0.6}
        animationType="spin"
        scale={0.3}
      />

      {/* Left side shapes (half visible) - spread vertically */}
      <EnhancedWireframeShape 
        position={[-5, 0, -1]} 
        geometryType="icosahedron"
        color="#00FF66" 
        speed={1.2}
        animationType="wobble"
        scale={0.5}
      />
      
      <EnhancedWireframeShape 
        position={[-5.5, -3, 1]} 
        geometryType="tetrahedron"
        color="#00D4FF" 
        speed={0.9}
        animationType="rotate"
        scale={0.6}
      />

      {/* Features section area - middle scattered */}
      <EnhancedWireframeShape 
        position={[1, 1, -4]} 
        geometryType="sphere"
        color="#4ECDC4" 
        speed={0.5}
        animationType="orbit"
        scale={0.3}
      />

      <EnhancedWireframeShape 
        position={[-2, -1, 3]} 
        geometryType="dodecahedron"
        color="#9B59B6" 
        speed={1.1}
        animationType="float"
        scale={0.4}
      />

      {/* Timeline/CTA section area - bottom scattered */}
      <EnhancedWireframeShape 
        position={[2, -4, 2]} 
        geometryType="cone"
        color="#E74C3C" 
        speed={0.7}
        animationType="spin"
        scale={0.5}
      />

      <EnhancedWireframeShape 
        position={[-1, -5, -1]} 
        geometryType="octahedron"
        color="#F39C12" 
        speed={1.3}
        animationType="wobble"
        scale={0.4}
      />
    </>
  );
};

// Enhanced Wireframe3D Component
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
        <EnhancedScene3D />
      </Canvas>
    </div>
  );
};

export default Wireframe3D;
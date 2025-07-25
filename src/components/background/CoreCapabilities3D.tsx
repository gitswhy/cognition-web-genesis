import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CoreCapabilitiesShape = ({ position, geometryType, color, speed = 1, animationType = 'rotate', scale = 0.8 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    switch (geometryType) {
      case 'icosahedron': return new THREE.IcosahedronGeometry(1.2);
      case 'torus': return new THREE.TorusGeometry(0.8, 0.3, 16, 100);
      case 'dodecahedron': return new THREE.DodecahedronGeometry(1);
      case 'sphere': return new THREE.SphereGeometry(1, 32, 16);
      default: return new THREE.IcosahedronGeometry(1.2);
    }
  }, [geometryType]);
  
  const material = useMemo(() => 
    new THREE.MeshBasicMaterial({ color, wireframe: true }), 
    [color]
  );
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      switch (animationType) {
        case 'rotate':
          meshRef.current.rotation.x += 0.003 * speed;
          meshRef.current.rotation.y += 0.006 * speed;
          break;
        case 'float':
          meshRef.current.rotation.y += 0.004 * speed;
          meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.5) * 0.2;
          break;
        case 'spin':
          meshRef.current.rotation.z += 0.008 * speed;
          meshRef.current.rotation.x += 0.002 * speed;
          break;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={geometry} material={material} />
  );
};

const CoreCapabilities3D = () => {
  return (
    <div className="absolute top-0 right-0 w-full h-full opacity-25 overflow-hidden">
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
        {/* Just 2 strategically placed shapes on the right */}
        <CoreCapabilitiesShape 
          position={[5.5, 1, 0]} 
          geometryType="icosahedron"
          color="#00FF66"
          speed={0.8}
          animationType="rotate"
          scale={0.6}
        />
        
        <CoreCapabilitiesShape 
          position={[6, -2, -1]} 
          geometryType="torus"
          color="#00D4FF"
          speed={1.1}
          animationType="float"
          scale={0.4}
        />
      </Canvas>
    </div>
  );
};

export default CoreCapabilities3D;
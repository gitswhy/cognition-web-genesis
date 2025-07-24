import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple floating particle component
const FloatingParticle: React.FC<{ 
  position: [number, number, number]; 
  color: string; 
  scale?: number;
  speed?: number;
}> = ({ position, color, scale = 1, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.3;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[0.1, 8, 6]} />
      <meshPhongMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
};

// Simple rotating wireframe
const RotatingWireframe: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh scale={1.5}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.2} wireframe />
      </mesh>
      <mesh scale={0.8}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhongMaterial color="#0066cc" transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

// Main 3D Scene Component
const ProEdition3DScene: React.FC = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} color="#00d4ff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.4} color="#00ff66" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#00d4ff" />

      {/* Central rotating wireframe */}
      <RotatingWireframe position={[0, 0, -2]} />

      {/* Floating particles around the scene */}
      <FloatingParticle position={[-3, 2, -1]} color="#00d4ff" scale={0.8} speed={0.5} />
      <FloatingParticle position={[3, -1, -2]} color="#0066cc" scale={1.2} speed={0.7} />
      <FloatingParticle position={[-2, -2, -3]} color="#00ff66" scale={0.6} speed={0.4} />
      <FloatingParticle position={[2, 2, -1]} color="#00d4ff" scale={0.9} speed={0.6} />
      <FloatingParticle position={[-4, 0, -2]} color="#0080ff" scale={0.7} speed={0.8} />
      <FloatingParticle position={[4, -2, -3]} color="#0099cc" scale={0.8} speed={0.3} />
      
      {/* Additional ambient particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingParticle
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4 - 2
          ]}
          color={Math.random() > 0.5 ? "#00d4ff" : "#00ff66"}
          scale={0.2 + Math.random() * 0.3}
          speed={0.2 + Math.random() * 0.6}
        />
      ))}
    </>
  );
};

// Main Component with error boundary
const ProEdition3D: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ProEdition3DScene />
      </Canvas>
    </div>
  );
};

export default ProEdition3D;
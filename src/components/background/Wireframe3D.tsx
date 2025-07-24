import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Wireframe Cube Component
const WireframeCube = ({ position, scale = 1, color, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

// Wireframe Octahedron Component
const WireframeOctahedron = ({ position, scale = 1, color, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008 * speed;
      meshRef.current.rotation.z += 0.012 * speed;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.8) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

// Wireframe Icosahedron Component
const WireframeIcosahedron = ({ position, scale = 1, color, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015 * speed;
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * speed * 1.2) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

// Wireframe Dodecahedron Component
const WireframeDodecahedron = ({ position, scale = 1, color, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.006 * speed;
      meshRef.current.rotation.y += 0.009 * speed;
      meshRef.current.rotation.z += 0.003 * speed;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed * 0.6) * 0.6;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <dodecahedronGeometry args={[1]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

// Wireframe Torus Component
const WireframeTorus = ({ position, scale = 1, color, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.008 * speed;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.7) * 0.5;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed * 0.9) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.4, 16, 32]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

// Wireframe Cone Component
const WireframeCone = ({ position, scale = 1, color, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.012 * speed;
      meshRef.current.rotation.y += 0.008 * speed;
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * speed * 1.1) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <coneGeometry args={[1, 2, 8]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

// Main 3D Scene Component
const Scene3D = () => {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      {/* Wireframe Geometric Shapes */}
      <WireframeCube 
        position={[-4, 2, -2]} 
        scale={0.8} 
        color="#00FF66" 
        speed={1.2} 
      />
      
      <WireframeOctahedron 
        position={[3, -1, 1]} 
        scale={0.6} 
        color="#00D4FF" 
        speed={0.8} 
      />
      
      <WireframeIcosahedron 
        position={[-2, -3, 2]} 
        scale={0.7} 
        color="#00FF66" 
        speed={1.5} 
      />
      
      <WireframeDodecahedron 
        position={[4, 3, -1]} 
        scale={0.5} 
        color="#00D4FF" 
        speed={0.9} 
      />
      
      <WireframeTorus 
        position={[-3, -1, -3]} 
        scale={0.6} 
        color="#00FF66" 
        speed={1.1} 
      />
      
      <WireframeCone 
        position={[2, 1, 3]} 
        scale={0.4} 
        color="#00D4FF" 
        speed={1.3} 
      />

      {/* Additional smaller shapes */}
      <WireframeCube 
        position={[6, -2, -1]} 
        scale={0.4} 
        color="#00FF66" 
        speed={1.8} 
      />
      
      <WireframeOctahedron 
        position={[-5, 1, 2]} 
        scale={0.5} 
        color="#00D4FF" 
        speed={0.7} 
      />
      
      <WireframeIcosahedron 
        position={[1, -4, -2]} 
        scale={0.3} 
        color="#00FF66" 
        speed={2.1} 
      />
    </>
  );
};

// Main Wireframe3D Component
const Wireframe3D = () => {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ 
          position: [0, 0, 10], 
          fov: 60,
          near: 0.1,
          far: 1000 
        }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene3D />
        {/* Optional orbit controls for development - remove in production */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
};

export default Wireframe3D;
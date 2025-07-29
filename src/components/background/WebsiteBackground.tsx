import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Wireframe3D from './Wireframe3D';

// Animated 3D Shape Component
const AnimatedShape = ({ position, geometryType, color, speed = 1, scale = 0.5, animationType = 'float' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Smooth rotation
      meshRef.current.rotation.x += 0.003 * speed;
      meshRef.current.rotation.y += 0.005 * speed;
      meshRef.current.rotation.z += 0.002 * speed;
      
      // Smooth floating animation
      if (animationType === 'float') {
        meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.6) * 0.5;
        meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.4) * 0.3;
      } else if (animationType === 'orbit') {
        meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.5) * 0.8;
        meshRef.current.position.z = position[2] + Math.sin(time * speed * 0.5) * 0.8;
      } else if (animationType === 'wobble') {
        meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.8) * 0.3;
        meshRef.current.scale.setScalar(scale + Math.sin(time * speed * 1.2) * 0.1);
      }
    }
  });
  
  const geometry = () => {
    switch (geometryType) {
      case 'torus': return <torusGeometry args={[0.8, 0.3, 16, 32]} />;
      case 'octahedron': return <octahedronGeometry args={[1]} />;
      case 'icosahedron': return <icosahedronGeometry args={[1]} />;
      case 'dodecahedron': return <dodecahedronGeometry args={[0.8]} />;
      case 'tetrahedron': return <tetrahedronGeometry args={[1]} />;
      case 'cone': return <coneGeometry args={[0.6, 1.2, 8]} />;
      case 'cylinder': return <cylinderGeometry args={[0.4, 0.8, 1.5, 8]} />;
      case 'torusKnot': return <torusKnotGeometry args={[0.6, 0.2, 64, 8]} />;
      default: return <boxGeometry args={[1, 1, 1]} />;
    }
  };
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry()}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.6} />
    </mesh>
  );
};

interface WebsiteBackgroundProps {
  children: React.ReactNode;
}

const WebsiteBackground: React.FC<WebsiteBackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Multi-layer animated grid background */}
      <motion.div 
        className="absolute inset-0 terminal-grid opacity-20"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 102, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px'
        }} 
      />
      
      {/* Enhanced 3D Wireframe background */}
      <Wireframe3D />

      {/* Enhanced 3D wireframe shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-70">
        <Canvas
          camera={{ position: [0, 0, 12], fov: 45 }}
          style={{ position: 'absolute', inset: 0, background: 'transparent', pointerEvents: 'none' }}
          gl={{ 
            antialias: false,
            alpha: true,
            powerPreference: "low-power"
          }}
          dpr={1}
        >
          {/* Diverse animated 3D wireframe shapes */}
          <AnimatedShape 
            position={[-4, 3, -2]} 
            geometryType="torus" 
            color="hsl(var(--terminal-green))" 
            speed={0.8} 
            scale={0.6}
            animationType="float"
          />
          
          <AnimatedShape 
            position={[4, -3, -1]} 
            geometryType="octahedron" 
            color="hsl(var(--terminal-blue))" 
            speed={1.2} 
            scale={0.5}
            animationType="orbit"
          />
          
          <AnimatedShape 
            position={[-3, -2, -3]} 
            geometryType="tetrahedron" 
            color="hsl(var(--terminal-green))" 
            speed={0.6} 
            scale={0.7}
            animationType="wobble"
          />
          
          <AnimatedShape 
            position={[3, 2, -2]} 
            geometryType="icosahedron" 
            color="hsl(var(--terminal-blue))" 
            speed={1.0} 
            scale={0.4}
            animationType="float"
          />
          
          <AnimatedShape 
            position={[-5, 0, -4]} 
            geometryType="dodecahedron" 
            color="hsl(var(--terminal-green))" 
            speed={0.7} 
            scale={0.3}
            animationType="orbit"
          />
          
          <AnimatedShape 
            position={[5, 0, -3]} 
            geometryType="cone" 
            color="hsl(var(--terminal-blue))" 
            speed={0.9} 
            scale={0.5}
            animationType="wobble"
          />
          
          <AnimatedShape 
            position={[-2, 4, -1]} 
            geometryType="cylinder" 
            color="hsl(var(--terminal-green))" 
            speed={0.5} 
            scale={0.4}
            animationType="float"
          />
          
          <AnimatedShape 
            position={[2, -4, -2]} 
            geometryType="torusKnot" 
            color="hsl(var(--terminal-blue))" 
            speed={1.3} 
            scale={0.3}
            animationType="orbit"
          />
        </Canvas>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-60 h-60 bg-terminal-green/4 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-terminal-blue/4 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Animated connection nodes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-[25%] left-8 w-1.5 h-1.5 bg-terminal-green/40 rounded-full"
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-[65%] left-6 w-1.5 h-1.5 bg-terminal-blue/40 rounded-full"
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-[45%] right-10 w-1.5 h-1.5 bg-terminal-green/40 rounded-full"
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-terminal-green/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default WebsiteBackground;
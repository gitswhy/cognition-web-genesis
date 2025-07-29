import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Wireframe3D from './Wireframe3D';

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
          {/* Additional 3D wireframe shapes scattered around */}
          <mesh position={[-4, 3, -2]} scale={0.8}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="hsl(var(--terminal-green))" wireframe transparent opacity={0.6} />
          </mesh>
          
          <mesh position={[4, -3, -1]} scale={0.6}>
            <octahedronGeometry args={[1]} />
            <meshBasicMaterial color="hsl(var(--terminal-blue))" wireframe transparent opacity={0.5} />
          </mesh>
          
          <mesh position={[-3, -2, -3]} scale={0.7}>
            <tetrahedronGeometry args={[1]} />
            <meshBasicMaterial color="hsl(var(--terminal-green))" wireframe transparent opacity={0.5} />
          </mesh>
          
          <mesh position={[3, 2, -2]} scale={0.5}>
            <icosahedronGeometry args={[1]} />
            <meshBasicMaterial color="hsl(var(--terminal-blue))" wireframe transparent opacity={0.6} />
          </mesh>
          
          <mesh position={[-5, 0, -4]} scale={0.4}>
            <dodecahedronGeometry args={[1]} />
            <meshBasicMaterial color="hsl(var(--terminal-green))" wireframe transparent opacity={0.4} />
          </mesh>
          
          <mesh position={[5, 0, -3]} scale={0.6}>
            <coneGeometry args={[0.8, 1.5, 8]} />
            <meshBasicMaterial color="hsl(var(--terminal-blue))" wireframe transparent opacity={0.5} />
          </mesh>

          {/* Animated rotation for all shapes */}
          <group>
            {Array.from({ length: 6 }).map((_, i) => (
              <mesh 
                key={i}
                position={[
                  (Math.random() - 0.5) * 10,
                  (Math.random() - 0.5) * 8,
                  (Math.random() - 0.5) * 6 - 2
                ]}
                scale={0.3 + Math.random() * 0.4}
                rotation={[
                  Math.random() * Math.PI,
                  Math.random() * Math.PI,
                  Math.random() * Math.PI
                ]}
              >
                <sphereGeometry args={[0.5, 8, 6]} />
                <meshBasicMaterial 
                  color={i % 2 === 0 ? "hsl(var(--terminal-green))" : "hsl(var(--terminal-blue))"} 
                  wireframe 
                  transparent 
                  opacity={0.3} 
                />
              </mesh>
            ))}
          </group>
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
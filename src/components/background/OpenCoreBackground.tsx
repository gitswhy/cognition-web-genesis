import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Shape Components
const FloatingCube = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.rotation.x += 0.003;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshBasicMaterial wireframe color="#00ff66" opacity={0.4} transparent />
    </mesh>
  );
};

const FloatingOctahedron = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.007;
      ref.current.rotation.z += 0.004;
    }
  });
  return (
    <mesh ref={ref} position={position} rotation={[0.5, 0, 0]}>
      <octahedronGeometry args={[1]} />
      <meshBasicMaterial wireframe color="#00d4ff" opacity={0.5} transparent />
    </mesh>
  );
};

const FloatingTetrahedron = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y -= 0.006;
    }
  });
  return (
    <mesh ref={ref} position={position} rotation={[0.2, 0.3, 0]}>
      <tetrahedronGeometry args={[0.8]} />
      <meshBasicMaterial wireframe color="#00ff66" opacity={0.6} transparent />
    </mesh>
  );
};

const FloatingIcosahedron = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.004;
      ref.current.rotation.y += 0.007;
    }
  });
  return (
    <mesh ref={ref} position={position} rotation={[0.1, 0.2, 0.3]}>
      <icosahedronGeometry args={[0.6]} />
      <meshBasicMaterial wireframe color="#00d4ff" opacity={0.45} transparent />
    </mesh>
  );
};

const FloatingTorus = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z += 0.003;
    }
  });
  return (
    <mesh ref={ref} position={position} rotation={[0.4, 0, 0]}>
      <torusGeometry args={[2, 0.3, 16, 32]} />
      <meshBasicMaterial wireframe color="#00ff66" opacity={0.3} transparent />
    </mesh>
  );
};

const OpenCoreBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced gradient layers with 3D depth */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-terminal-green/12 to-background"
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [1, 0.8, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-terminal-green/6 via-transparent to-terminal-blue/8"
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#00ff66" />
          
          <FloatingCube position={[-3, 2, 0]} />
          <FloatingOctahedron position={[3, -2, -2]} />
          <FloatingTetrahedron position={[0, 3, -1]} />
          <FloatingIcosahedron position={[-2, -3, 1]} />
          <FloatingTorus position={[0, 0, -3]} />
        </Canvas>
      </div>

      {/* Enhanced matrix-style code rain with terminal commands */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-terminal-green/20 font-mono text-xs leading-tight"
            style={{
              left: `${(i * 12.5) + Math.random() * 6}%`,
              width: '100px',
              willChange: 'transform'
            }}
            animate={{
              y: ['-100vh', '100vh']
            }}
            transition={{
              duration: 15 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 15
            }}
          >
            {['gitswhy init', 'overclock --gpu', 'quantum-flush', 'vault sync', 'mirror --deep', 'autoclean', 'bootstrap', 'core.start()'].map((cmd, j) => (
              <div key={j} className="mb-3" style={{ opacity: Math.random() * 0.7 + 0.3 }}>
                $ {cmd}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      
      {/* Enhanced floating terminal windows */}
      <div className="absolute inset-0">
        {/* Large central terminal window */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ willChange: 'transform' }}
          animate={{ 
            scale: [1, 1.02, 1],
            rotateY: [0, 2, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="w-[500px] h-[300px] bg-terminal-bg/20 border-2 border-terminal-green/30 rounded-lg shadow-[0_0_60px_rgba(0,255,102,0.15)] backdrop-blur-sm">
            {/* Terminal header */}
            <div className="h-8 bg-terminal-green/10 border-b border-terminal-green/20 rounded-t-lg flex items-center px-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green/50"></div>
              </div>
              <div className="ml-4 text-xs text-terminal-green/60 font-mono">reflexcore@gitswhy:~$</div>
            </div>
            {/* Terminal content */}
            <div className="p-4 font-mono text-sm text-terminal-green/40">
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              >
                $ gitswhy bootstrap --detect
              </motion.div>
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ✓ Environment configured
              </motion.div>
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                $ gitswhy overclock --monitor
              </motion.div>
              <motion.div
                className="text-terminal-green/30"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="animate-pulse">█</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Floating terminal modules */}
        <motion.div 
          className="absolute top-[15%] left-[10%] bg-terminal-bg/10 border border-terminal-green/20 rounded-lg p-4 backdrop-blur-sm"
          style={{ willChange: 'transform' }}
          animate={{ 
            y: [0, -15, 0],
            rotateX: [0, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="text-xs font-mono text-terminal-green/40">
            <div>├── bootstrap/</div>
            <div>├── overclock/</div>
            <div>└── vault/</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-[70%] right-[10%] bg-terminal-bg/10 border border-terminal-blue/20 rounded-lg p-4 backdrop-blur-sm"
          style={{ willChange: 'transform' }}
          animate={{ 
            y: [0, 12, 0],
            rotateY: [0, -3, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          <div className="text-xs font-mono text-terminal-blue/40">
            <div>CPU: 23%</div>
            <div>RAM: 4.2GB</div>
            <div>GPU: Active</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-[25%] right-[20%] bg-terminal-bg/10 border border-terminal-green/15 rounded-lg p-3 backdrop-blur-sm"
          style={{ willChange: 'transform' }}
          animate={{ 
            scale: [1, 1.05, 1],
            rotateZ: [0, 2, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="text-xs font-mono text-terminal-green/30">
            <div>$ gitswhy --status</div>
            <div className="text-terminal-green/50">✓ Online</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[30%] left-[25%] bg-terminal-bg/10 border border-terminal-blue/15 rounded-lg p-3 backdrop-blur-sm"
          style={{ willChange: 'transform' }}
          animate={{ 
            x: [0, 8, 0],
            y: [0, -5, 0]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        >
          <div className="text-xs font-mono text-terminal-blue/40">
            <div>quantum-flush</div>
            <div className="text-terminal-green/30">cleaning...</div>
          </div>
        </motion.div>
        
        {/* Enhanced floating data particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-terminal-green/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              willChange: 'transform'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Floating code fragments */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-terminal-green/20 font-mono text-xs"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              willChange: 'transform'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              rotateX: [0, 360, 0]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          >
            {['def init():', 'async load()', 'class Core', 'import sys', 'return self', 'while True:'][i]}
          </motion.div>
        ))}
      </div>
      
      {/* Simplified terminal grid - single layer */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.06)_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{ willChange: 'opacity' }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Simplified radial patterns */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(0,255,102,0.12),transparent_50%)]"
        style={{ willChange: 'opacity' }}
        animate={{ 
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(0,255,102,0.08),transparent_50%)]"
        style={{ willChange: 'opacity' }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Simplified connection lines - reduced count */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + (i * 30)}%`}
            y1={`${20 + (i * 20)}%`}
            x2={`${40 + (i * 20)}%`}
            y2={`${60 + (i * 15)}%`}
            stroke="rgba(0,255,102,0.1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default OpenCoreBackground;
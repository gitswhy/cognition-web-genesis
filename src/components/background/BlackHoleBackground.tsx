
import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useLocation } from 'react-router-dom';
import * as THREE from 'three';

interface BlackHoleParticlesProps {
  count: number;
  scrollY: number;
  pageDepth: number;
}

const BlackHoleParticles: React.FC<BlackHoleParticlesProps> = ({ count, scrollY, pageDepth }) => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors, velocities] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create spiral distribution around black hole
      const angle = (i / count) * Math.PI * 8;
      const radius = Math.random() * 4 + 1;
      const height = (Math.random() - 0.5) * 2;
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      
      // Store initial velocities for spiral motion
      velocities[i * 3] = -Math.sin(angle) * 0.01;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = Math.cos(angle) * 0.01;
      
      // Color based on distance from center (event horizon effect)
      const distance = Math.sqrt(positions[i * 3] ** 2 + positions[i * 3 + 2] ** 2);
      const intensity = Math.max(0, 1 - distance / 6);
      
      colors[i * 3] = intensity; // Red
      colors[i * 3 + 1] = intensity * 0.5; // Green
      colors[i * 3 + 2] = intensity * 2; // Blue (more blue for cosmic effect)
    }
    
    return [positions, colors, velocities];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      const colors = ref.current.geometry.attributes.color.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const x = positions[i * 3];
        const z = positions[i * 3 + 2];
        const distance = Math.sqrt(x ** 2 + z ** 2);
        
        // Gravitational effect - particles spiral inward
        const force = Math.max(0.001, 1 / (distance ** 2));
        const angle = Math.atan2(z, x);
        
        // Spiral motion with scroll influence
        const spiralSpeed = 0.02 + (scrollY * 0.0001);
        positions[i * 3] += velocities[i * 3] * spiralSpeed;
        positions[i * 3 + 2] += velocities[i * 3 + 2] * spiralSpeed;
        
        // Pull towards center
        positions[i * 3] -= Math.cos(angle) * force;
        positions[i * 3 + 2] -= Math.sin(angle) * force;
        
        // Reset particles that get too close to event horizon
        if (distance < 0.5) {
          const resetAngle = Math.random() * Math.PI * 2;
          const resetRadius = Math.random() * 3 + 3;
          positions[i * 3] = Math.cos(resetAngle) * resetRadius;
          positions[i * 3 + 2] = Math.sin(resetAngle) * resetRadius;
        }
        
        // Update colors based on distance and page depth
        const newDistance = Math.sqrt(positions[i * 3] ** 2 + positions[i * 3 + 2] ** 2);
        const intensity = Math.max(0, 1 - newDistance / 6) * (1 + pageDepth * 0.3);
        
        colors[i * 3] = intensity;
        colors[i * 3 + 1] = intensity * 0.5;
        colors[i * 3 + 2] = intensity * 2;
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.geometry.attributes.color.needsUpdate = true;
      
      // Rotate entire system based on scroll
      ref.current.rotation.y = scrollY * 0.001;
      ref.current.rotation.x = Math.sin(scrollY * 0.0005) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.005}
        sizeAttenuation={true}
        alphaTest={0.001}
        opacity={0.8}
      />
    </Points>
  );
};

interface AccretionDiskProps {
  scrollY: number;
  pageDepth: number;
}

const AccretionDisk: React.FC<AccretionDiskProps> = ({ scrollY, pageDepth }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.1 + scrollY * 0.0005;
      ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1);
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2, 0.1, 16, 100]} />
      <meshBasicMaterial 
        color={new THREE.Color().setHSL(0.6, 1, 0.3 + pageDepth * 0.1)}
        transparent 
        opacity={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

interface EventHorizonProps {
  pageDepth: number;
}

const EventHorizon: React.FC<EventHorizonProps> = ({ pageDepth }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial 
        color={new THREE.Color().setHSL(0.8, 1, 0.1 + pageDepth * 0.05)}
        transparent 
        opacity={0.6}
      />
    </mesh>
  );
};

interface BlackHoleBackgroundProps {
  className?: string;
}

const BlackHoleBackground: React.FC<BlackHoleBackgroundProps> = ({ className = '' }) => {
  const location = useLocation();
  const scrollYRef = useRef(0);
  
  // Define page depths (distance from black hole)
  const pageDepths = {
    '/': 0.5,           // Homepage - close to black hole
    '/about': 0.7,      // About - medium distance
    '/how-it-works': 0.3, // How it works - very close
    '/integrations': 0.6, // Integrations - medium
    '/pricing': 0.8,    // Pricing - farther
    '/docs': 0.9,       // Docs - farthest
    '/blog': 0.85,      // Blog - far
    '/community': 0.4,  // Community - close
    '/pro-edition': 0.6, // Pro - medium
    '/open-core': 0.65  // Open core - medium
  };
  
  const currentPageDepth = pageDepths[location.pathname as keyof typeof pageDepths] || 0.5;
  
  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed inset-0 ${className}`}>
      <Canvas
        camera={{ 
          position: [0, 0, 5 + currentPageDepth * 3], 
          fov: 75 
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent' }}
        frameloop="always"
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#4a90e2" />
        
        {/* Event Horizon */}
        <EventHorizon pageDepth={currentPageDepth} />
        
        {/* Accretion Disk */}
        <AccretionDisk scrollY={scrollYRef.current} pageDepth={currentPageDepth} />
        
        {/* Spiraling Particles */}
        <BlackHoleParticles 
          count={1200} 
          scrollY={scrollYRef.current} 
          pageDepth={currentPageDepth} 
        />
        
        {/* Outer particle field */}
        <BlackHoleParticles 
          count={800} 
          scrollY={scrollYRef.current * 0.5} 
          pageDepth={currentPageDepth} 
        />
      </Canvas>
    </div>
  );
};

export default BlackHoleBackground;

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  radius?: number;
  color?: string;
  speed?: number;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 1500,
  radius = 1.2,
  color = '#00ff66',
  speed = 0.0005
}) => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create spherical distribution
      const r = radius * Math.pow(Math.random(), 1/3);
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      // Random color variations
      const colorObj = new THREE.Color(color);
      const variation = 0.3;
      colorObj.r += (Math.random() - 0.5) * variation;
      colorObj.g += (Math.random() - 0.5) * variation;
      colorObj.b += (Math.random() - 0.5) * variation;
      
      colors[i * 3] = colorObj.r;
      colors[i * 3 + 1] = colorObj.g;
      colors[i * 3 + 2] = colorObj.b;
    }
    
    return [positions, colors];
  }, [count, radius, color]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.002}
        sizeAttenuation={true}
        alphaTest={0.001}
        opacity={0.6}
      />
    </Points>
  );
};

interface FloatingGeometryProps {
  position: [number, number, number];
  color: string;
  geometry: 'box' | 'sphere' | 'torus';
  scale?: number;
  speed?: number;
}

const FloatingGeometry: React.FC<FloatingGeometryProps> = ({
  position,
  color,
  geometry,
  scale = 1,
  speed = 1
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.1;
    }
  });

  const GeometryComponent = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[0.1 * scale, 0.1 * scale, 0.1 * scale]} />;
      case 'sphere':
        return <sphereGeometry args={[0.05 * scale, 16, 16]} />;
      case 'torus':
        return <torusGeometry args={[0.04 * scale, 0.02 * scale, 8, 16]} />;
      default:
        return <boxGeometry args={[0.1 * scale, 0.1 * scale, 0.1 * scale]} />;
    }
  };

  return (
    <mesh ref={ref} position={position}>
      <GeometryComponent />
      <meshBasicMaterial 
        color={color} 
        transparent 
        opacity={0.4}
        wireframe
      />
    </mesh>
  );
};

interface Background3DProps {
  className?: string;
  particleCount?: number;
  showGeometry?: boolean;
}

const Background3D: React.FC<Background3DProps> = ({
  className = '',
  particleCount = 1500,
  showGeometry = true
}) => {
  const floatingObjects = useMemo(() => [
    { position: [-0.5, 0.2, -0.3] as [number, number, number], color: '#00ff66', geometry: 'box' as const, scale: 1.2, speed: 0.8 },
    { position: [0.3, -0.1, -0.2] as [number, number, number], color: '#0099ff', geometry: 'sphere' as const, scale: 0.8, speed: 1.2 },
    { position: [0.1, 0.4, -0.4] as [number, number, number], color: '#00ff66', geometry: 'torus' as const, scale: 1.5, speed: 0.6 },
    { position: [-0.2, -0.3, -0.1] as [number, number, number], color: '#0099ff', geometry: 'box' as const, scale: 0.6, speed: 1.4 },
    { position: [0.4, 0.1, -0.5] as [number, number, number], color: '#00ff66', geometry: 'sphere' as const, scale: 1.0, speed: 0.9 },
  ], []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        
        <ParticleField 
          count={particleCount}
          radius={1.2}
          color="#00ff66"
          speed={0.0005}
        />
        
        {showGeometry && floatingObjects.map((obj, index) => (
          <FloatingGeometry
            key={index}
            position={obj.position}
            color={obj.color}
            geometry={obj.geometry}
            scale={obj.scale}
            speed={obj.speed}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default Background3D;
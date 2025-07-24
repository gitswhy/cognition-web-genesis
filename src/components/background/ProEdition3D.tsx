import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Box, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// Floating Neural Network Nodes
const FloatingNode: React.FC<{ position: [number, number, number]; color: string; scale?: number }> = ({ 
  position, 
  color, 
  scale = 1 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} scale={scale}>
      <meshPhongMaterial color={color} transparent opacity={0.8} />
    </Sphere>
  );
};

// Data Flow Connections
const DataConnection: React.FC<{ start: [number, number, number]; end: [number, number, number] }> = ({ 
  start, 
  end 
}) => {
  const ref = useRef<THREE.Line>(null);
  
  const points = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(...start),
      new THREE.Vector3((start[0] + end[0]) / 2, (start[1] + end[1]) / 2 + 1, (start[2] + end[2]) / 2),
      new THREE.Vector3(...end)
    ]);
    return curve.getPoints(50);
  }, [start, end]);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setFromPoints(points);
    return geom;
  }, [points]);

  useFrame((state) => {
    if (ref.current) {
      const material = ref.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <primitive
      ref={ref}
      object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ 
        color: "#00d4ff", 
        transparent: true, 
        opacity: 0.3 
      }))}
    />
  );
};

// Rotating Security Shield
const SecurityShield: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Outer shield ring */}
      <Octahedron scale={1.5}>
        <meshPhongMaterial color="#00d4ff" transparent opacity={0.1} wireframe />
      </Octahedron>
      {/* Inner core */}
      <Icosahedron scale={0.8}>
        <meshPhongMaterial color="#0066cc" transparent opacity={0.6} />
      </Icosahedron>
      {/* Floating elements around the shield */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2;
        return (
          <Box
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 0.5) * 0.5,
              Math.sin(angle) * radius
            ]}
            scale={0.1}
          >
            <meshPhongMaterial color="#00ff66" />
          </Box>
        );
      })}
    </group>
  );
};

// Main 3D Scene Component
const ProEdition3DScene: React.FC = () => {
  const { viewport } = useThree();
  
  // Neural network node positions
  const nodes = useMemo(() => [
    { pos: [-4, 2, -2] as [number, number, number], color: "#00d4ff", scale: 0.3 },
    { pos: [-2, -1, -1] as [number, number, number], color: "#0066cc", scale: 0.4 },
    { pos: [0, 1, -3] as [number, number, number], color: "#00ff66", scale: 0.2 },
    { pos: [3, -2, -1] as [number, number, number], color: "#00d4ff", scale: 0.35 },
    { pos: [4, 0, -2] as [number, number, number], color: "#0080ff", scale: 0.25 },
    { pos: [-3, -3, -4] as [number, number, number], color: "#0099cc", scale: 0.3 },
    { pos: [2, 3, -2] as [number, number, number], color: "#00ff99", scale: 0.2 },
    { pos: [-1, 2, -5] as [number, number, number], color: "#0066ff", scale: 0.4 },
  ], []);

  // Data connections between nodes
  const connections = useMemo(() => [
    { start: nodes[0].pos, end: nodes[1].pos },
    { start: nodes[1].pos, end: nodes[2].pos },
    { start: nodes[2].pos, end: nodes[3].pos },
    { start: nodes[3].pos, end: nodes[4].pos },
    { start: nodes[0].pos, end: nodes[5].pos },
    { start: nodes[4].pos, end: nodes[6].pos },
    { start: nodes[5].pos, end: nodes[7].pos },
  ], [nodes]);

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Directional lights */}
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#00d4ff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#00ff66" />
      
      {/* Point lights for dramatic effect */}
      <pointLight position={[0, 5, 0]} intensity={0.4} color="#00d4ff" />
      <pointLight position={[5, -5, 5]} intensity={0.3} color="#0066cc" />

      {/* Security Shield - main focal point */}
      <SecurityShield position={[0, 0, -2]} />

      {/* Neural Network Nodes */}
      {nodes.map((node, i) => (
        <FloatingNode
          key={i}
          position={node.pos}
          color={node.color}
          scale={node.scale}
        />
      ))}

      {/* Data Connections */}
      {connections.map((connection, i) => (
        <DataConnection
          key={i}
          start={connection.start}
          end={connection.end}
        />
      ))}

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingNode
          key={`particle-${i}`}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 6 - 3
          ]}
          color={Math.random() > 0.5 ? "#00d4ff" : "#00ff66"}
          scale={0.05 + Math.random() * 0.05}
        />
      ))}
    </>
  );
};

// Main Component
const ProEdition3D: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ProEdition3DScene />
      </Canvas>
    </div>
  );
};

export default ProEdition3D;
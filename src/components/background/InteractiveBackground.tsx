import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Extend THREE for the shader material
declare global {
  namespace JSX {
    interface IntrinsicElements {
      plasmaShaderMaterial: any;
    }
  }
}

// Create the shader material
const PlasmaShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uIntensity: 1.0,
    uSpeed: 1.0,
    uMouse: new THREE.Vector2(0, 0),
    uResolution: new THREE.Vector2(1, 1),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader - optimized plasma effect
  `
    uniform float uTime;
    uniform float uIntensity;
    uniform float uSpeed;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    varying vec2 vUv;

    vec3 plasma(vec2 uv, float time) {
      // Simple plasma calculation for performance
      float x = uv.x;
      float y = uv.y;
      
      float v1 = sin(x * 10.0 + time * uSpeed);
      float v2 = sin(10.0 * (x * sin(time * 0.2) + y * cos(time * 0.3)) + time * uSpeed);
      float v3 = sin(sqrt(100.0 * (x * x + y * y) + 1.0) + time * uSpeed);
      
      float plasma = v1 + v2 + v3;
      
      // Deep blues and purples
      vec3 color1 = vec3(0.1, 0.1, 0.4); // Deep blue
      vec3 color2 = vec3(0.2, 0.1, 0.6); // Purple
      vec3 color3 = vec3(0.05, 0.15, 0.3); // Dark blue
      
      vec3 finalColor = mix(color1, color2, sin(plasma * 0.5) * 0.5 + 0.5);
      finalColor = mix(finalColor, color3, cos(plasma * 0.3) * 0.5 + 0.5);
      
      return finalColor * uIntensity;
    }

    void main() {
      vec2 uv = vUv;
      
      // Mouse interaction - subtle distortion
      vec2 mouse = uMouse * 0.1;
      uv += mouse * 0.05;
      
      vec3 color = plasma(uv, uTime);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

// Make it available to React
// @ts-ignore
extend({ PlasmaShaderMaterial });

// Particle system component
const ParticleSystem: React.FC<{ mouse: THREE.Vector2; intensity: number; speed: number }> = ({ mouse, intensity, speed }) => {
  const meshRef = useRef<THREE.Points>(null);
  const particleCount = 150; // Capped for performance
  
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 5;
      
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    return [positions, velocities];
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    
    const geometry = meshRef.current.geometry;
    const positionAttribute = geometry.attributes.position;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Mouse attraction
      const mouseForce = 0.0001 * intensity;
      const dx = mouse.x * 10 - positionAttribute.array[i3];
      const dy = mouse.y * 10 - positionAttribute.array[i3 + 1];
      
      velocities[i3] += dx * mouseForce;
      velocities[i3 + 1] += dy * mouseForce;
      
      // Apply velocity with speed modifier
      positionAttribute.array[i3] += velocities[i3] * speed;
      positionAttribute.array[i3 + 1] += velocities[i3 + 1] * speed;
      positionAttribute.array[i3 + 2] += velocities[i3 + 2] * speed;
      
      // Damping
      velocities[i3] *= 0.99;
      velocities[i3 + 1] *= 0.99;
      velocities[i3 + 2] *= 0.99;
      
      // Boundary wrapping
      if (positionAttribute.array[i3] > 10) positionAttribute.array[i3] = -10;
      if (positionAttribute.array[i3] < -10) positionAttribute.array[i3] = 10;
      if (positionAttribute.array[i3 + 1] > 10) positionAttribute.array[i3 + 1] = -10;
      if (positionAttribute.array[i3 + 1] < -10) positionAttribute.array[i3 + 1] = 10;
    }
    
    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#4a90e2"
        transparent
        opacity={0.6 * intensity}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Light gradient component
const LightGradient: React.FC<{ intensity: number }> = ({ intensity }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(prev => prev + Math.PI / 4);
    }, 20000); // Change direction every 20 seconds
    
    return () => clearInterval(interval);
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    const time = clock.elapsedTime;
    const x = Math.cos(direction + time * 0.1) * 2;
    const y = Math.sin(direction + time * 0.1) * 2;
    
    meshRef.current.position.set(x, y, -2);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[8, 8]} />
      <meshBasicMaterial
        color="#2a5aa0"
        transparent
        opacity={0.3 * intensity}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

// Main scene component
const InteractiveScene: React.FC<{ mouse: THREE.Vector2; config: BackgroundConfig }> = ({ mouse, config }) => {
  const { viewport } = useThree();
  const plasmaRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (plasmaRef.current) {
      plasmaRef.current.uTime = clock.elapsedTime;
      plasmaRef.current.uMouse = mouse;
      plasmaRef.current.uIntensity = config.intensity;
      plasmaRef.current.uSpeed = config.speed;
      plasmaRef.current.uResolution.set(viewport.width, viewport.height);
    }
  });

  return (
    <>
      {/* Plasma background */}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry args={[1, 1]} />
        <plasmaShaderMaterial ref={plasmaRef} />
      </mesh>
      
      {/* Particle system */}
      <ParticleSystem mouse={mouse} intensity={config.intensity} speed={config.speed} />
      
      {/* Light gradients */}
      <LightGradient intensity={config.intensity} />
    </>
  );
};

interface BackgroundConfig {
  intensity: number;
  speed: number;
  enabled: boolean;
}

interface InteractiveBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  config?: Partial<BackgroundConfig>;
}

// WebGL detection
const detectWebGL = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
};

// Fallback static gradient
const StaticGradientFallback: React.FC = () => (
  <div
    className="absolute inset-0"
    style={{
      background: `
        radial-gradient(ellipse at top left, rgba(26, 59, 160, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(99, 47, 158, 0.4) 0%, transparent 50%),
        linear-gradient(135deg, #0a0e1a 0%, #1a1b3a 50%, #2a1b4a 100%)
      `
    }}
  />
);

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ 
  className = '', 
  children, 
  config = {} 
}) => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [mouse, setMouse] = useState(new THREE.Vector2(0, 0));
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  
  const finalConfig: BackgroundConfig = {
    intensity: 0.8,
    speed: 1.0,
    enabled: true,
    ...config
  };

  useEffect(() => {
    // WebGL detection
    if (!detectWebGL()) {
      setHasWebGL(false);
      return;
    }

    // Performance detection
    const checkPerformance = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl');
      if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          // Simple heuristic for low-end devices
          if (renderer.includes('Intel') && renderer.includes('HD')) {
            setIsLowPerformance(true);
          }
        }
      }
    };

    checkPerformance();

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse(new THREE.Vector2(x, y));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Adjust config for low-performance devices
  const optimizedConfig = isLowPerformance ? {
    ...finalConfig,
    intensity: finalConfig.intensity * 0.7,
    speed: finalConfig.speed * 0.8
  } : finalConfig;

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Background */}
      {hasWebGL && finalConfig.enabled ? (
        <div className="fixed inset-0 z-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            gl={{ 
              antialias: false, 
              alpha: true,
              powerPreference: "high-performance",
              preserveDrawingBuffer: false
            }}
            style={{ background: 'transparent' }}
            frameloop="always"
            dpr={[1, isLowPerformance ? 1 : 2]}
          >
            <InteractiveScene mouse={mouse} config={optimizedConfig} />
          </Canvas>
        </div>
      ) : (
        <StaticGradientFallback />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default InteractiveBackground;
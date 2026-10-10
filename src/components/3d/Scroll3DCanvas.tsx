import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * ScrollDrivenMesh
 * 
 * Tracks window scroll position and smoothly interpolates 3D rotation,
 * scale, and position based on scroll offset and cursor dynamics.
 */
function ScrollDrivenMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Base continuous rotation
    meshRef.current.rotation.x += delta * 0.4;
    meshRef.current.rotation.y += delta * 0.5;

    // Scroll-driven dynamic tilt & acceleration
    const scrollOffset = scrollYRef.current * 0.003;
    meshRef.current.rotation.z = scrollOffset * 1.5;
    meshRef.current.position.y = Math.sin(scrollOffset) * 0.35;

    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.6;
      ringRef.current.rotation.y -= delta * 0.4;
      ringRef.current.rotation.z = -scrollOffset * 1.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.4}>
        {/* Core faceted crystal in deep indigo */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.3, 0]} />
          <meshPhysicalMaterial
            color="#2B3A8F"
            emissive="#1E2968"
            emissiveIntensity={0.25}
            roughness={0.15}
            metalness={0.85}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Orbiting halo ring with California sunset tone */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1.8}>
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.0, 0.07, 16, 64]} />
          <meshStandardMaterial
            color="#FF6B6B"
            emissive="#FFB86B"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </Float>
    </group>
  );
}

export const Scroll3DCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[6, 8, 4]} intensity={1.8} color="#FFFFFF" />
        <pointLight position={[-6, -4, -2]} intensity={1.2} color="#3D5AFE" />
        <pointLight position={[4, -4, 2]} intensity={1.5} color="#FFB86B" />
        <ScrollDrivenMesh />
      </Canvas>
    </div>
  );
};

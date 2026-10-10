import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface Hero3DBackgroundProps {
  theme?: 'california' | 'indigo' | 'sunset' | 'slate';
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

/**
 * Interactive Starfield & Particle Constellation
 * 
 * Each frame, particles gently rotate and gravitate subtly toward
 * normalized mouse coordinates tracked by Three.js state pointer.
 */
function ParticleField({ color = '#3D5AFE', count = 200 }: { color?: string; count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { pointer } = useThree();

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 9;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi) - 3;

      sc[i] = Math.random() * 0.8 + 0.4;
    }
    return [pos, sc];
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x += delta * 0.02;

    // Fluid reaction to mouse pointer
    const targetX = pointer.x * 0.5;
    const targetY = pointer.y * 0.5;
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.04;
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-scale" args={[scales, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.11}
        color={color}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

/**
 * DistortedSphereCluster
 * 
 * Renders an undulating 3D morphing sphere with MeshDistortMaterial,
 * flanked by glossy orbiting torus geometries with California sunset reflections.
 */
function DistortedSphereCluster({
  primaryColor,
  accentColor,
}: {
  primaryColor: string;
  accentColor: string;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x += delta * 0.06;

    // Smooth magnetic mouse parallax
    const targetX = 2.4 + pointer.x * 0.8;
    const targetY = 0.2 + pointer.y * 0.6;
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.04;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.04;
  });

  return (
    <group ref={groupRef} position={[2.4, 0.2, -1]}>
      {/* Central Morphing 3D Blob with MeshDistortMaterial */}
      <Float speed={2.2} rotationIntensity={1.4} floatIntensity={1.6}>
        <Sphere args={[1.4, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color={primaryColor}
            emissive="#1E2968"
            emissiveIntensity={0.2}
            distort={0.42}
            speed={2.2}
            roughness={0.2}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.15}
          />
        </Sphere>
      </Float>

      {/* Orbiting Sunset Accent Torus */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1.8}>
        <mesh position={[-0.9, 1.3, 0.6]} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.3, 0.08, 16, 64]} />
          <meshStandardMaterial
            color={accentColor}
            emissive={accentColor}
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.9}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      {/* Floating Accent Octahedron in California Sunset Coral */}
      <Float speed={2.8} rotationIntensity={1.8} floatIntensity={2}>
        <mesh position={[1.5, -1.3, 0.9]}>
          <octahedronGeometry args={[0.65, 0]} />
          <meshStandardMaterial
            color={accentColor}
            roughness={0.15}
            metalness={0.85}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

/**
 * Hero3DBackground
 * 
 * Full 3D interactive hero canvas. Features MeshDistortMaterial,
 * interactive starfield, and smooth fallback gradient.
 */
export const Hero3DBackground: React.FC<Hero3DBackgroundProps> = ({
  theme = 'california',
  density = 'medium',
  className = '',
}) => {
  const themeColors = {
    california: { primary: '#2B3A8F', electric: '#3D5AFE', accent: '#FF6B6B', sunset: '#FFB86B' },
    indigo: { primary: '#2B3A8F', electric: '#3D5AFE', accent: '#3D5AFE', sunset: '#536DFE' },
    sunset: { primary: '#FF6B6B', electric: '#FFB86B', accent: '#2B3A8F', sunset: '#3D5AFE' },
    slate: { primary: '#334155', electric: '#64748B', accent: '#FF6B6B', sunset: '#FFB86B' },
  };

  const currentTheme = themeColors[theme] || themeColors.california;
  const count = density === 'low' ? 100 : density === 'high' ? 260 : 180;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 ${className}`}>
      {/* Ambient California Sunset & Indigo Glow Spheres */}
      <div
        className="absolute -top-36 -right-36 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
        style={{
          background: `radial-gradient(circle, ${currentTheme.electric} 0%, rgba(61, 90, 254, 0.1) 40%, transparent 70%)`,
        }}
      />
      <div
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, ${currentTheme.sunset} 0%, ${currentTheme.accent} 40%, transparent 70%)`,
        }}
      />

      {/* 3D WebGL Canvas */}
      <div className="w-full h-full pointer-events-auto">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={1.1} />
          <directionalLight position={[10, 10, 6]} intensity={1.6} color="#ffffff" />
          <pointLight position={[-10, -8, -4]} intensity={1.2} color={currentTheme.electric} />
          <pointLight position={[8, -6, 4]} intensity={1.4} color={currentTheme.sunset} />

          <Suspense fallback={null}>
            <ParticleField color={currentTheme.electric} count={count} />
            <DistortedSphereCluster
              primaryColor={currentTheme.primary}
              accentColor={currentTheme.accent}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

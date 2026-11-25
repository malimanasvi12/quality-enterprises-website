"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lightformer, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Flange({ still }: { still: boolean }) {
  const g = useRef<THREE.Group>(null!);
  const geo = useMemo(() => {
    const s = new THREE.Shape(); s.absarc(0, 0, 1.5, 0, Math.PI * 2, false);
    const c = new THREE.Path(); c.absarc(0, 0, 0.55, 0, Math.PI * 2, true); s.holes.push(c);
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; const h = new THREE.Path(); h.absarc(Math.cos(a) * 1.05, Math.sin(a) * 1.05, 0.15, 0, Math.PI * 2, true); s.holes.push(h); }
    const e = new THREE.ExtrudeGeometry(s, { depth: 0.4, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, curveSegments: 64 });
    e.center(); return e;
  }, []);
  useFrame((st) => {
    const t = st.clock.elapsedTime, p = st.pointer, o = g.current;
    o.rotation.y = THREE.MathUtils.lerp(o.rotation.y, (still ? 0 : Math.sin(t * 0.4) * 0.6) + p.x * 0.5, 0.06);
    o.rotation.x = THREE.MathUtils.lerp(o.rotation.x, 0.25 - p.y * 0.4, 0.06);
    o.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05);
    st.camera.position.x = THREE.MathUtils.lerp(st.camera.position.x, p.x * 0.4, 0.04);
    st.camera.lookAt(0, 0, 0);
  });
  return (
    <group ref={g} scale={0.6}>
      <Float speed={still ? 0 : 1.5} floatIntensity={0.6}>
        <mesh geometry={geo}>
          <meshPhysicalMaterial color="#008C8C" metalness={0.85} roughness={0.28} clearcoat={1} clearcoatRoughness={0.15} envMapIntensity={1.3} />
        </mesh>
      </Float>
    </group>
  );
}
export default function HeroScene({ reduced }: { reduced: boolean }) {
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 5.5], fov: 40 }} gl={{ antialias: true, powerPreference: "high-performance" }} aria-label="Interactive 3D powder-coated metal flange">
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 2, 3]} intensity={35} color="#F28500" />
      <pointLight position={[-3, -1, 3]} intensity={30} color="#008C8C" />
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} position={[0, 4, -4]} scale={[10, 2, 1]} />
        <Lightformer form="rect" intensity={2} position={[-5, 0, 2]} scale={[2, 8, 1]} color="#8fe3e3" />
        <Lightformer form="rect" intensity={2} position={[5, 0, 2]} scale={[2, 8, 1]} color="#ffc27a" />
      </Environment>
      <Flange still={reduced} />
      {!reduced && <Sparkles count={40} scale={7} size={2} speed={0.3} color="#F28500" opacity={0.7} />}
      <ContactShadows position={[0, -2.1, 0]} opacity={0.5} scale={9} blur={2.5} far={4} />
    </Canvas>
  );
}

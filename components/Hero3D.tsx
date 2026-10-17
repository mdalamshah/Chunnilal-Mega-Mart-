"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Procedural silk-like cloth: a subdivided plane displaced every frame, tilting toward the pointer.
function Cloth({ reduced }: { reduced: boolean }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const geo = useMemo(() => new THREE.PlaneGeometry(4.6, 3.2, 64, 44), []);
  const base = useMemo(() => Float32Array.from(geo.attributes.position.array as Float32Array), [geo]);
  useFrame(({ clock, pointer }) => {
    const a = geo.attributes.position.array as Float32Array;
    const t = reduced ? 0 : clock.elapsedTime;
    if (!reduced || a[2] === 0) {
      for (let i = 0; i < a.length; i += 3) {
        const x = base[i], y = base[i + 1];
        a[i + 2] = Math.sin(x * 1.6 + t * 1.2) * 0.28 + Math.sin(y * 2.4 + t * 1.7) * 0.12 + Math.sin((x + y) * 1.1 - t) * 0.1;
      }
      geo.attributes.position.needsUpdate = true;
      geo.computeVertexNormals();
    }
    const m = mesh.current;
    m.rotation.y += (pointer.x * 0.5 - m.rotation.y) * 0.06;
    m.rotation.x += (-pointer.y * 0.3 - m.rotation.x) * 0.06;
  });
  return (
    <mesh ref={mesh} geometry={geo}>
      <meshStandardMaterial color="#9b1230" side={THREE.DoubleSide} roughness={0.32} metalness={0.15} />
    </mesh>
  );
}

function hasWebGL() {
  try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch { return false; }
}

export default function Hero3D() {
  const [mode, setMode] = useState<"wait" | "3d" | "fallback">("wait");
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(matchMedia("(prefers-reduced-motion: reduce)").matches);
    setMode(hasWebGL() ? "3d" : "fallback");
  }, []);
  return (
    <div className="relative h-[min(52vh,460px)] min-h-[280px] touch-pan-y" aria-label="Interactive 3D fabric display">
      {mode === "3d" && (
        <Canvas camera={{ position: [0, 0, 7], fov: 38 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.55} />
          <directionalLight position={[3, 4, 5]} intensity={1.1} color="#fff0d0" />
          <pointLight position={[-4, -2, 3]} intensity={1.4} color="#c9a24b" />
          <Cloth reduced={reduced} />
        </Canvas>
      )}
      {mode === "fallback" && (
        <svg viewBox="0 0 400 300" aria-hidden className="h-full w-full">
          <defs><linearGradient id="fb" x1="0" x2="1"><stop offset="0" stopColor="#c91a45" /><stop offset=".6" stopColor="#8e0f2a" /><stop offset="1" stopColor="#e7c97a" /></linearGradient></defs>
          <path d="M20 180C100 80 160 260 240 150S350 120 380 90V220C330 250 280 190 220 240S80 270 20 230Z" fill="url(#fb)" />
        </svg>
      )}
    </div>
  );
}

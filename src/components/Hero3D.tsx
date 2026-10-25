"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Test WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Three.js Scene Setup based on container dimensions
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the rotating planet system and touch/mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Responsive planetary positioning and scale
    const updatePositioning = (w: number) => {
      if (w >= 1024) {
        // Desktop: Position planetary center to the right so it balances headline text
        mainGroup.position.set(1.35, 0.05, 0);
        mainGroup.scale.setScalar(1.15);
      } else if (w >= 768) {
        // Tablet: Slightly right of center
        mainGroup.position.set(0.45, 0.05, 0);
        mainGroup.scale.setScalar(1.05);
      } else if (w >= 480) {
        // Large mobile: Centered in background behind the text
        mainGroup.position.set(0, 0.1, 0);
        mainGroup.scale.setScalar(0.95);
      } else {
        // Small mobile (<480px): Centered in background behind the text
        mainGroup.position.set(0, 0.08, 0);
        mainGroup.scale.setScalar(0.85);
      }
    };

    updatePositioning(width);

    // 1. Central Core: Outer Electric Lime Geometric Wireframe
    const coreGeometry = new THREE.IcosahedronGeometry(1.65, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xc6ff4d, // electric lime
      wireframe: true,
      transparent: true,
      opacity: 0.82,
    });
    const wireframeMesh = new THREE.Mesh(coreGeometry, wireframeMaterial);
    mainGroup.add(wireframeMesh);

    // Solid inner core for planetary body depth
    const solidCoreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const solidCoreMat = new THREE.MeshBasicMaterial({
      color: 0x081512,
      transparent: true,
      opacity: 0.85,
    });
    const solidCoreMesh = new THREE.Mesh(solidCoreGeo, solidCoreMat);
    mainGroup.add(solidCoreMesh);

    // Inner translucent cyan mesh
    const innerGeometry = new THREE.IcosahedronGeometry(1.38, 1);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x55d6d0, // muted cyan
      wireframe: true,
      transparent: true,
      opacity: 0.62,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 2. Wide Orbital Particle Cloud
    const isMobile = width < 768;
    const particleCount = isMobile ? 260 : 420;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const limeColor = new THREE.Color(0xc6ff4d);
    const cyanColor = new THREE.Color(0x55d6d0);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? limeColor : cyanColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.065 : 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // 3. Planetary Orbital Rings
    const ringGeo1 = new THREE.RingGeometry(2.35, 2.42, 80);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xc6ff4d,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 2.7;
    ringMesh1.rotation.y = Math.PI / 8;
    mainGroup.add(ringMesh1);

    const ringGeo2 = new THREE.RingGeometry(3.0, 3.06, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x55d6d0,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 3;
    ringMesh2.rotation.y = -Math.PI / 10;
    mainGroup.add(ringMesh2);

    // Parallax variables
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      targetRotationY = x * 0.9;
      targetRotationX = y * 0.9;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const x = touch.clientX / window.innerWidth - 0.5;
        const y = touch.clientY / window.innerHeight - 0.5;
        targetRotationY = x * 1.4;
        targetRotationX = y * 1.4;
      }
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      updatePositioning(width);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Respect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const speedMultiplier = prefersReducedMotion ? 0.3 : 1.0;

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime =
        (performance.now() - startTime) * 0.001 * speedMultiplier;

      // Smooth continuous planetary axial rotation
      wireframeMesh.rotation.x = elapsedTime * 0.16;
      wireframeMesh.rotation.y = elapsedTime * 0.22;

      innerMesh.rotation.x = -elapsedTime * 0.22;
      innerMesh.rotation.y = -elapsedTime * 0.14;

      solidCoreMesh.rotation.y = elapsedTime * 0.1;

      particles.rotation.y = elapsedTime * 0.08;
      particles.rotation.x = elapsedTime * 0.02;

      ringMesh1.rotation.z = elapsedTime * 0.05;
      ringMesh2.rotation.z = -elapsedTime * 0.04;

      // Mouse/touch parallax lerp
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      mainGroup.rotation.x = currentRotationX;
      mainGroup.rotation.y = currentRotationY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchmove", handleTouchMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      wireframeMaterial.dispose();
      solidCoreGeo.dispose();
      solidCoreMat.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full flex items-center justify-center select-none pointer-events-none overflow-hidden z-0"
    >
      {/* Fallback for when WebGL is unavailable */}
      {!hasWebGL && (
        <div className="relative w-56 xs:w-64 sm:w-80 h-56 xs:h-64 sm:h-80 rounded-full border border-[#C6FF4D]/40 flex items-center justify-center animate-pulse">
          <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#55D6D0]/40 animate-spin" />
          <div className="w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-gradient-to-tr from-[#C6FF4D]/20 via-[#55D6D0]/20 to-transparent blur-xl" />
        </div>
      )}
    </div>
  );
}

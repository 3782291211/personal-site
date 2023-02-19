import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import "../index.css";
import { Project, Title } from "./Text";
import { ProjectImage } from "./ProjectImage";

const Scene = () => {
  const scene = useRef();
  useFrame(() => {
    scene.current.rotation.y += 0.02;
    scene.current.rotation.x += 0.02;
    scene.current.rotation.z += 0.02;
  });
  return (
    <group ref={scene}>
      <Box>
        <meshLambertMaterial color="white" />
      </Box>
    </group>
  );
};

export default function Home() {
  return (
    <Canvas className='home_canvas'>
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
      <Title/>
      <Project/>
      {/* <Scene /> */}
      </Suspense>
    </Canvas>
  );
}

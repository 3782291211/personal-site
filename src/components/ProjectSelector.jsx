import React, { Suspense, useRef, useState } from "react";
import { OrbitControls, SpotLight, Stars } from "@react-three/drei";
import "../index.css";
import { Project, Title } from "./Text";
import { Loading } from "./Loading";
import { Bloom, EffectComposer, Glitch, Noise, Scanline, Vignette } from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from 'postprocessing'
import { useThree } from "@react-three/fiber";


export default function ProjectSelector() {
  const [glitch, setGlitch] = useState(false);
  const { viewport } = useThree();
  const meshRef = useRef();

  return (<mesh ref={meshRef} scale={viewport.width < 5.5 ? viewport.width / 6 : 1}>
      <Stars/>
      <directionalLight intensity={0.5} />
      <SpotLight anglePower={8} position={[3, 3, 5]}/>
      <SpotLight anglePower={8} position={[-3, 3, 5]}/>
      <OrbitControls></OrbitControls>
      <EffectComposer>
        <Bloom
        mipmapBlur 
        luminanceThreshold={1}
        intensity={3}
        />
        <Scanline blendFunction={BlendFunction.DARKEN} density={5} opacity={0.1}/>
        <Noise opacity={0.1}/>
        <Glitch active={glitch} mode={GlitchMode.SPORADIC} strength={[0.2, 2.7]} delay={[0.2, 1.5]} ratio={0.7} duration={[0.05, 1]} />
        <Vignette  offset={0.7} darkness={0.55} blendFunction={BlendFunction.NORMAL}/>
      <Suspense fallback={<Loading/>}>
      <Title/>
      <Project glitch={glitch} setGlitch={setGlitch}/>
      </Suspense>
      </EffectComposer>
      </mesh>
  );
}

import React, { Suspense, useRef, useState } from "react";
import { OrbitControls, SpotLight, Stars, useDepthBuffer } from "@react-three/drei";
import "../index.css";
import { Projects, Title } from "./Text";
import { Loading } from "./Loading";
import { Bloom, EffectComposer, Glitch, Noise, Scanline, Vignette } from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from 'postprocessing'
import { useThree } from "@react-three/fiber";


export default function Home() {
  const [glitch, setGlitch] = useState(true);
  const { viewport } = useThree();
  const meshRef = useRef();
  console.log(viewport);

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
        {glitch && <Glitch mode={GlitchMode.SPORADIC} strength={[0.2, 0.7]} delay={[1.5, 6]} ratio={0.5} duration={[0.05, 0.6]} />}
        <Vignette  offset={0.7} darkness={0.55} blendFunction={BlendFunction.NORMAL}/>
      <Suspense fallback={<Loading/>}>
      <Title/>
      <Projects glitch={glitch} setGlitch={setGlitch}/>
      </Suspense>
      </EffectComposer>
      </mesh>
  );
}

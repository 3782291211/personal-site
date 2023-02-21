import React, { forwardRef, Suspense, useRef, useState } from "react";
import { OrbitControls, SpotLight, Stars } from "@react-three/drei";
import "../index.css";
import { Project, Title } from "./Text";
import { Loading } from "./Loading";
import { Bloom, EffectComposer, Glitch, GodRays, Noise, Scanline, Vignette } from "@react-three/postprocessing";
import { BlendFunction, Resizer, GlitchMode, KernelSize } from 'postprocessing';
import { useThree } from "@react-three/fiber";
import { useResource } from "react-three-fiber";
import { isMobile } from "react-device-detect";


const SunMesh = forwardRef(function SunMesh(props, forwardRef) {
  return (<mesh ref={forwardRef} position={[4, 9, -10]}>
      <sphereGeometry args={[0.5, 36, 36]}/>
      <meshBasicMaterial color={"#BD7912"}/></mesh>);
});

export default function ProjectSelector() {
  const [glitch, setGlitch] = useState(false);
  const { viewport } = useThree();
  const meshRef = useRef();
  const sunRef = useResource(null);

  return (<mesh ref={meshRef} scale={viewport.width < 5.5 ? viewport.width / 6 : 1}>
      <Stars factor={viewport.width < 5.5 ? 2 : 4}/>
      <directionalLight intensity={0.5} />
      {!isMobile && <><SpotLight anglePower={8} position={[3, 3, 5]}/>
      <SpotLight anglePower={8} position={[-3, 3, 5]}/></>}
      <OrbitControls/>
      <EffectComposer multisampling={0}>
        {isMobile && <SunMesh ref={sunRef}/>}
        {sunRef.current && <GodRays
        sun={sunRef.current}
        blendFunction={BlendFunction.Screen}
        samples={40}
        density={0.95}
        decay={0.97}
        weight={0.6}
        exposure={0.3}
        clampMax={1}
        width={Resizer.AUTO_SIZE}
        height={Resizer.AUTO_SIZE}
        kernelSize={KernelSize.SMALL}
        blur={true}
        />}
        <Bloom
        mipmapBlur 
        luminanceThreshold={1}
        intensity={3}
        />
        <Scanline blendFunction={BlendFunction.DARKEN} density={5} opacity={0.1}/>
        <Noise opacity={0.1}/>
        <Glitch active={glitch} mode={GlitchMode.SPORADIC} strength={[0.2, 2.7]} delay={[0.2, 1.5]} ratio={0.7} duration={[0.05, 1]} />
        <Vignette  offset={0.5} darkness={0.55} blendFunction={BlendFunction.NORMAL}/>
      <Suspense fallback={<Loading/>}>
      <Title/>
      <Project glitch={glitch} setGlitch={setGlitch}/>
      </Suspense>
      </EffectComposer>
      </mesh>
  );
}

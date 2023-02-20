import { useFrame } from "@react-three/fiber";
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { forwardRef } from "react";
import { BlendFunction, KernelSize, Resizer } from "postprocessing";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useResource } from "react-three-fiber";


const Sun = forwardRef(function Sun(props, forwardRef) {
    useFrame(({ clock }) => {
      forwardRef.current.position.x = Math.sin(clock.getElapsedTime()) * -9;
      forwardRef.current.position.y = Math.cos(clock.getElapsedTime()) * -9;
    });
  
    return (
      <mesh ref={forwardRef} position={[0, 0, -15]}>
        <sphereGeometry args={[1, 36, 36]} />
        <meshBasicMaterial color={"#3564FF"} />
      </mesh>
    );
  });
  
function Effects() {
  const sunRef = useResource(null);
  return (
    <>
      <Sun ref={sunRef} />
      {sunRef.current && (
        <EffectComposer multisampling={0}>
          <GodRays
            sun={sunRef.current}
            blendFunction={BlendFunction.Screen}
            samples={30}
            density={0.97}
            decay={0.96}
            weight={0.6}
            exposure={0.4}
            clampMax={1}
            width={Resizer.AUTO_SIZE}
            height={Resizer.AUTO_SIZE}
            kernelSize={KernelSize.SMALL}
            blur={true}
          />
        </EffectComposer>
      )}
    </>
  );
};


export function Home () {
    return (
        <mesh>
        <PerspectiveCamera makeDefault fov={65} position={[0, 0, 40]} />
        <Effects/>
        <OrbitControls/>
        <ambientLight intensity={0.8} />
        <pointLight position={[15, 15, 15]} intensity={1} />
        </mesh>
        );
    };
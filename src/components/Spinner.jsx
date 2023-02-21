import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import img from '../assets/rust.png';

export function Spinner({position}) {
    const texture = new THREE.TextureLoader().load(img);

    const myRef = useRef(null);
    useFrame(() => {
        myRef.current.rotation.y += 0.05;
        myRef.current.rotation.x += 0.04;
        myRef.current.rotation.z += 0.04;
    });

    return(
        <mesh ref={myRef} position={position}>
        <torusKnotGeometry args={[0.6, 0.1, 256, 64, 2, 5]} />
        <meshPhysicalMaterial
          color={"silver"}
          roughness={0}
          metalness={0}
          clearcoat={1}
        />
        <meshMatcapMaterial
          opacity={1}
          depthTest={true}
          depthWrite={true}
          alphaTest={0}
          matcap={texture}/>
      </mesh>
    )
};
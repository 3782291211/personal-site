import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import img from '../assets/green.png';

export function Loading() {
    const texture = new THREE.TextureLoader().load(img);

    const myRef = useRef(null);
    useFrame(({}) => {
        myRef.current.rotation.y += 0.04;
        myRef.current.rotation.x += 0.04;
        myRef.current.rotation.z += 0.04;
    })

    return(
        <group>
        <Text
        position={[-0.5, 0.9, 2]}
        fontSize={0.24}
        anchorX="left">
         <meshStandardMaterial emissive="gold" emissiveIntensity={2} toneMapped={false} />Loading...</Text>
          <mesh ref={myRef}>
          <meshMatcapMaterial
          opacity={1}
          depthTest={true}
          depthWrite={true}
          alphaTest={0}
          matcap={texture}/>
          <coneGeometry args={[2, 3, 3]}/>
          </mesh>
        </group>
    )
};
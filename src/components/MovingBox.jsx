import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Text3D, useMatcapTexture } from "@react-three/drei";
import jockey from './jockey.json';

export function MovingBox() {
    const [ref, api] = useBox(() => ({mass: 0}));
    useFrame(({clock}) => api.position.set(Math.sin(clock.getElapsedTime()) * 0.1, -2.8, 0.5));

    function MatCap({ texture }) {
        const [matcap] = useMatcapTexture(texture, 256);
        return <meshMatcapMaterial matcap={matcap} />;
      };
  

    return (
    <mesh ref={ref}>
       <Text3D
        position={[-1.9, 0.3, 0]}
        font={jockey}
        height={0.05}
        letterSpacing={0.03}
        size={0.16}
        curveSegments={4}
        bevelEnabled
        bevelThickness={0.02}
        bevelOffset={0.01}
        bevelSegments={9}
      >
        {" "}
        My GitHub page
        <MatCap texture={"3B3C3F_DAD9D5_929290_ABACA8"} />{" "}
      </Text3D>
      {/* <boxGeometry args={[2, 1, 0.5]} /> */}
    </mesh>
    );
};
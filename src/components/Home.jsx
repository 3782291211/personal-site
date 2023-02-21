import { useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer, GodRays } from "@react-three/postprocessing";
import { forwardRef, Suspense } from "react";
import { BlendFunction, KernelSize, Resizer } from "postprocessing";
import { PerspectiveCamera, Image, Float, useMatcapTexture, Text3D, Text } from "@react-three/drei";
import { useResource } from "react-three-fiber";
import ancient from '../assets/ancient.jpg';
import blackops from '../assets/black-ops.json';
import robotoRegular from '../assets/RobotoMono-Regular.ttf';

export function Title() {
  const { viewport } = useThree();
  const title = viewport.width > 18.9 ? 'Location: unknown' : `Location: 
unknown`;
    function MatCap({ texture }) {
          const [matcap] = useMatcapTexture(texture, 256);
          return <meshMatcapMaterial matcap={matcap} />;
        };
    
      return(<Float><Text3D position={viewport.width > 18.9 ? [-6.3, 6.7, 5] : [-1.7, 6.7, 5]}
            font={blackops}
            height={0.2}
            lineHeight={0.7}
            letterSpacing={0}
            size={viewport.width > 18.9 ? 0.9 : 0.5}
            curveSegments={10}
            bevelEnabled
            bevelThickness={0.02}
            bevelOffset={0.01}
            bevelSegments={9}>{title}<MatCap texture={"422509_C89536_824512_0A0604"}/></Text3D></Float>)
  };

const Sun = forwardRef(function Sun(props, forwardRef) {
    useFrame(({ clock }) => {
      forwardRef.current.position.x = Math.sin(clock.getElapsedTime()) * -2.5;
      forwardRef.current.position.y = Math.cos(clock.getElapsedTime()) * -2.5;
    });
  
    return (<mesh ref={forwardRef} position={[10, 0, 5]}>
        <sphereGeometry args={[0.5, 36, 36]}/>
        <meshBasicMaterial color={"#BD7912"}/></mesh>);
  });
  
function Effects() {
  const { viewport } = useThree();
  const sunRef = useResource(null);
  const str = viewport.width > 18.9 ? `      Take a moment to admire your surroundings,
or use the links above to navigate around the website.` : `   Use the links above to 
navigate around the website.`;

  const title = viewport.width > 18.9 ? 'Location: unknown' : `Location: 
unknown`;
  function MatCap({ texture }) {
    const [matcap] = useMatcapTexture(texture, 256);
    return <meshMatcapMaterial matcap={matcap} />;
  };

  return (<EffectComposer multisampling={0}>
    <Sun ref={sunRef}/>
      {sunRef.current && (<GodRays
            sun={sunRef.current}
            blendFunction={BlendFunction.Screen}
            samples={30}
            density={0.97}
            decay={0.96}
            weight={0.85}
            exposure={0.4}
            clampMax={1}
            width={Resizer.AUTO_SIZE}
            height={Resizer.AUTO_SIZE}
            kernelSize={KernelSize.SMALL}
            blur={true}/>)}
        <Bloom mipmapBlur luminanceThreshold={1} intensity={2}/>
          <Float><Text3D position={viewport.width > 18.9 ? [-6.3, 6.7, 5] : [-2.5, 7, 5]}
            font={blackops}
            height={0.2}
            lineHeight={0.7}
            letterSpacing={0}
            size={viewport.width > 18.9 ? 0.9 : 0.7}
            curveSegments={10}
            bevelEnabled
            bevelThickness={0.02}
            bevelOffset={0.01}
            bevelSegments={9}>{title}<MatCap texture={"422509_C89536_824512_0A0604"}/></Text3D></Float>
          <Float><Text 
           position={viewport.width > 18.9 ? [-6.3, 5.2, 5] : [-3.5, 4.5, 5]}
           fontSize={0.4}
           font={robotoRegular}
           anchorX="left">{str}
           <meshStandardMaterial emissive="#CC0000" transparent opacity={0.6} emissiveIntensity={5} toneMapped={false}/>
           </Text></Float>
           </EffectComposer>);
};


export function Home () {
    return (<mesh>
        <PerspectiveCamera makeDefault fov={65} position={[0, 0, 20]} />
        <Float>
        <Image transparent
        scale={[60, 33]}
        opacity={0.8}
        position={[0, -0.5, -0.2]}
        url={ancient}/></Float>
        <Effects/>
        <ambientLight intensity={0.8} />
        <pointLight position={[15, 15, 15]} intensity={1} />
        </mesh>
        );
    };
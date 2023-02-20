import { Cloud, Float, OrbitControls, PerspectiveCamera, Text3D, useMatcapTexture, Image, Text, SpotLight } from "@react-three/drei";
import blackops from '../assets/black-ops.json';
import robotoBold from '../assets/RobotoMono-Bold.ttf';
import robotoRegular from '../assets/RobotoMono-Regular.ttf';
import robotoLight from '../assets/RobotoMono-Light.ttf';
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import ancient from '../assets/ancient.jpg';
import smAncient from '../assets/sm-ancient.jpg';

const str = `I'm an app developer with a serious
passion for coding. If I'm not coding, I'm 
planning and wireframing my next project. For me,
coding is an adventure, the most satisfying part
of which is reaching the end of a project and
successfully deploying an app into production.

I mainly work with JavaScript, HTML, CSS and SQL,
but I also know Python and a bit of PHP. My focus
is on full stack web development and I
enjoy all aspects of the development process.

My current project is based on PHP and Laravel.
I'm very excited to see how this one turns out.`

export function Title() {
    function MatCap({ texture }) {
          const [matcap] = useMatcapTexture(texture, 256);
          return <meshMatcapMaterial matcap={matcap} />;
        };
    
      return(
        <Float>
        <Text3D
            position={[-2.6, 2.9, 2]}
            font={blackops}
            height={0.2}
            letterSpacing={0}
            size={0.6}
            curveSegments={10}
            bevelEnabled
            bevelThickness={0.02}
            bevelOffset={0.01}
            bevelSegments={9}
          >
            {" "}
            About me
            <MatCap texture={"36220C_C6C391_8C844A_8B7B4C"} />{" "}
          </Text3D>
          </Float>
      )
    };

export function About() {
const {viewport} = useThree();
const meshRef = useRef();

    return (
    <mesh ref={meshRef} scale={viewport.width < 8.2 ? viewport.width / 13 : 0.6}><Float>
    {/* <PerspectiveCamera makeDefault fov={60} position={[0, 0, 10]} /> */}
        {/* <OrbitControls/> */}
    <EffectComposer>
    <Bloom/>
    <ambientLight intensity={0.8} />
    <Title/>
    <Cloud
        position={[0, 0, -30]}
        opacity={0.7}
        speed={0.4} // Rotation speed
        width={30} // Width of the full cloud
        depth={1} // Z-dir depth
        segments={40} // Number of particles
        />
    <Image
    transparent
    scale={viewport.width > 7.2 ? [39, 19] : [30, 64]}
    opacity={0.8}
    position={[0, -0.5, -0.2]}
    url={viewport.width > 9 ? ancient : smAncient}
    /> 

    <Float>
    <Text 
     position={[-4.4, -0.5, 2]}
     fontSize={0.3}
     font={robotoRegular}
     anchorX="left">{str}
     <meshStandardMaterial emissive="#660000" emissiveIntensity={6} toneMapped={false} />
     </Text>
     </Float>
     </EffectComposer></Float>
    </mesh>)
};



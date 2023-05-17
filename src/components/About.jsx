import { Cloud, Float, Text3D, useMatcapTexture, Image, Text } from "@react-three/drei";
import blackops from '../assets/black-ops.json';
import robotoRegular from '../assets/RobotoMono-Regular.ttf';
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import ancient from '../assets/ev1.jpg';
import smAncient from '../assets/sm-ancient.jpg';
import { isMobile } from "react-device-detect";
import { Spinner } from "./Spinner";
import { Loading } from "./Loading";

const str = `I'm an app developer with a serious passion
for coding. If I'm not coding, I'm planning
and wireframing my next project. For me, coding
is an adventure, the most satisfying part
of which is reaching the end of a project and
successfully deploying an app into production.

I mainly work with JavaScript, HTML, CSS and SQL,
but I also know Python, PHP and C#. My focus
is on full stack web development and I
love all aspects of the development process.`;

const strNarrow = `I'm an app developer with
a serious passion for
coding. If I'm not coding,
I'm planning and
wireframing my next project.
For me, coding is an
adventure, the most
satisfying part
of which is reaching the
end of a project and
successfully deploying an
app into production.

I mainly work with
JavaScript, HTML,
CSS and SQL,
but I also know Python, 
PHP and C#.
My focus
is on full stack
web development and I
love all aspects of
the development process.`;

export function Title() {
  const {viewport} = useThree();
    function MatCap({ texture }) {
          const [matcap] = useMatcapTexture(texture, 256);
          return <meshMatcapMaterial matcap={matcap} />;
        };
    
      return(
        <Float>
        <Text3D
            position={isMobile ? [-2.1, 2.75, 2] : viewport.width < 3.3 ? [-3.5, 8.2, 2] : [-2.1, 2.5, 2]}
            font={blackops}
            height={0.2}
            letterSpacing={0}
            size={viewport.width > 3.3 ? 0.5 : 0.9}
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

    return (<Suspense fallback={<Loading/>}>
    <mesh ref={meshRef} scale={
      viewport.width > 8 ? 0.6
      : viewport.width > 5 ? viewport.width / 12
      : viewport.width / 11}><Float>
    <EffectComposer multisampling={0}>
    <Bloom mipmapBlur luminanceThreshold={1} intensity={2}/>
    <ambientLight intensity={0.8} />
    {isMobile && <Spinner position={[0, 6, 0]}/>}
    <Title/>
    <Cloud
        position={[0, 0, -30]}
        opacity={0.7}
        speed={0.4}
        width={30}
        depth={1}
        segments={40}
        />
    <Image
    transparent
    scale={viewport.width > 5.5 ? [39, 19] : [30, 64]}
    opacity={0.8}
    position={[0, -0.5, -0.2]}
    url={viewport.width > 5.5 ? ancient : smAncient}
    /> 

    <Float>
    <Text 
     position={viewport.width < 3.3 ? [-3.5, -1.3, 2] : [-3.7, -0.5, 2]}
     fontSize={viewport.width < 3.3 ? 0.45 : 0.27}
     font={robotoRegular}
     anchorX="left">{viewport.width < 3.3 ? strNarrow : str}
     <meshStandardMaterial emissive="#C48519" transparent opacity={0.8} emissiveIntensity={2} toneMapped={false} />
     </Text>
     </Float>
     </EffectComposer></Float>
    </mesh></Suspense>)
};



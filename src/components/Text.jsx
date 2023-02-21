import { Html, Text, Image, Box, Text3D, useMatcapTexture, Float } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";
import blackops from '../assets/black-ops.json';
import { Icon } from "./svg";
import { projects } from "./projectsList";
import aiTexture from '../assets/ai.png';
import robotoBold from '../assets/RobotoMono-Bold.ttf';
import robotoRegular from '../assets/RobotoMono-Regular.ttf';
import robotoLight from '../assets/RobotoMono-Light.ttf';

export function Title() {
function MatCap({ texture }) {
      const [matcap] = useMatcapTexture(texture, 256);
      return <meshMatcapMaterial matcap={matcap} />;
    };

  return(
    <Float>
    <Text3D
        position={[-1.9, 1.7, 0.8]}
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
        Projects
        <MatCap texture={"3B3C3F_DAD9D5_929290_ABACA8"} />{" "}
      </Text3D>
      </Float>
  )
};

export function Project ({setGlitch, glitch}) {
 const [projectIndex, setProjectIndex] = useState(0);
 const scene = useRef();
 const texture = useLoader(TextureLoader, projects[projectIndex]['image']);
  useFrame(() => {
    scene.current.rotation.y += 0.01;
    scene.current.rotation.x += 0.01;
    scene.current.rotation.z += 0.01;
  });

    return (<>
     <group position={[1.4, -0.2, 1.4]} ref={scene}>
      <Box>
        <meshStandardMaterial map={texture}/>
      </Box>
    </group>

    <Image
    transparent
    scale={[8, 7]}
    opacity={0.02}
    position={[0, 0, -0.2]}
    url={aiTexture}
    /> 

    <Text 
     position={[-2.3, 1.3, 0]}
     fontSize={0.15}
     font={robotoRegular}
     anchorX="left">
         Use the controls below to cycle through my projects.
         <meshStandardMaterial emissive="white" emissiveIntensity={1.2} toneMapped={false} />
     </Text>

    <Text 
    position={[-2.3, 0.9, 0]}
    fontSize={0.24}
    font={robotoBold}
    anchorX="left">
        <meshStandardMaterial emissive="hotpink" emissiveIntensity={4} toneMapped={false} />
        {projects[projectIndex]['project name']}
    </Text>
     <Text 
     position={[-2.3, 0.6, 0]}
     fontSize={0.15}
     font={robotoLight}
     anchorX="left">
         {projects[projectIndex]['type']} project.
         <meshStandardMaterial emissive="white" emissiveIntensity={1.2} toneMapped={false} />
     </Text>
     <Text 
     position={[-2.3, 0.2, 0]}
     fontSize={0.15}
     font={robotoRegular}
     anchorX="left">
         Tech: {projects[projectIndex]['tech']}
         <meshStandardMaterial emissive="white" emissiveIntensity={1.2} toneMapped={false} />
     </Text>
     <Text 
     position={[-2.3, -0.1, 0]}
     fontSize={0.15}
     font={robotoRegular}
     lineHeight={1.2}
     anchorX="left"
     anchorY="top"
     >
         Description: {projects[projectIndex]['description']}
         <meshStandardMaterial emissive="white" emissiveIntensity={1.02} toneMapped={false} />
     </Text>

     <Text 
     position={[-2.3, -1.35, 0]}
     anchorX="left">
         <Html
         wrapperClass="external-link" 
         position={[0.9, -0.4, 0]}
         transform>
            <a href={projects[projectIndex]['link']} target="_blank" rel="noopener noreferrer"><Icon/>Click to view app</a>
         </Html>
     </Text>

     <Text 
     position={[-2.3, -1.35, 0]}
     anchorX="left">
         <Html 
         wrapperClass="external-link"
         position={[1.63, -0.62, 0]}
         transform>
            <a href={projects[projectIndex]['github']} target="_blank" rel="noopener noreferrer"><Icon/>Click to view GitHub repository</a>
         </Html>
     </Text>

     <Text 
     position={[0, -2.34, 0.07]}
     fontSize={0.12}
     font={robotoRegular}
     anchorX="left"
     anchorY="top"
     color="rgb(10, 100, 230)">
         Select project
         <meshStandardMaterial emissive="green" emissiveIntensity={7} toneMapped={false} />
     </Text>

     <Text 
     position={[-0.4, -2.7, 0.07]}
     fontSize={0.12}
     font={robotoRegular}
     anchorX="left"
     anchorY="top"
     onClick={() => {
        setGlitch(prev => !prev)
     }}>
         {`Glitch effect: ${glitch ? 'ON' : 'OFF'}`}
         <meshStandardMaterial emissive={glitch ? "#FF264B" : "rgb(10, 100, 230)"} emissiveIntensity={glitch ? 4.4 : 7} toneMapped={false} />
     </Text>

     {projectIndex > 0 && <Text 
     position={[-1.3, -2.3, 0]}
     fontSize={0.20}
     font={robotoRegular}
     anchorX="left"
     anchorY="top"
     color="hotpink"
     onClick={() => {
        if (projectIndex > 0) {
              setProjectIndex(prev => prev - 1)
        };
     }}>
         Previous
         <meshStandardMaterial emissive="hotpink" emissiveIntensity={4} toneMapped={false} />
     </Text>}

     {projectIndex < 5 && <Text 
     position={[1.3, -2.3, 0]}
     fontSize={0.20}
     font={robotoRegular}
     anchorX="left"
     anchorY="top"
     color="hotpink"
     onClick={() => {
        if (projectIndex < 5) {
             setProjectIndex(prev => prev + 1);
        };
     }}>
         Next
         <meshStandardMaterial emissive="hotpink" emissiveIntensity={4} toneMapped={false} />
     </Text>}

    </>);
};
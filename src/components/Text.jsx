import { Html, Text, Image } from "@react-three/drei";

export function Title() {
    return(
        <Text 
        position={[0, 2.3, 0]} 
        anchorX="center" 
        anchorY="center" 
        textAlign="center"
        fontSize={0.6}>Projects</Text>
    );
};

const projects = [
    {
        "image": "three-d-react-app.png",
        "project name": "3D React app",
        "type": "Front end",
        "tech": "React, Three.js, Bootstrap",
        "description": `A 3D react app created using
Three.js, featuring a 3D and 2D view based 
on recursive geometric computations.`,
"link": "https://3782291211.github.io/3D-geometric-sim/"
    }
]

export function Project () {
    return (<>
    <Image
    position={[0.9, 0, 3]}
    url={projects[0]['image']}
    />
    <Text 
    position={[-2.3, 1, 0]}
    fontSize={0.24}
    anchorX="left">
        {projects[0]['project name']}
    </Text>
     <Text 
     position={[-2.3, 0.7, 0]}
     fontSize={0.15}
     anchorX="left">
         {projects[0]['type']} project
     </Text>
     <Text 
     position={[-2.3, 0.4, 0]}
     fontSize={0.15}
     anchorX="left">
         Tech: {projects[0]['tech']}
     </Text>
     <Text 
     position={[-2.3, 0.05, 0]}
     fontSize={0.15}
     anchorX="left">
         Description: {projects[0]['description']}
     </Text>

     <Text 
     position={[-2.3, -0.4, 0]}
     anchorX="left"
     anchorY="top">
         <Html occlude="blending" transform position={[0.65, 0, 0]}>
            <a href={projects[0]['link']} target="_blank" rel="noopener noreferrer">Click to view app</a>
         </Html>
     </Text>

     <Text 
     position={[-2.3, -1.7, 0]}
     fontSize={0.15}
     anchorX="left"
     anchorY="top"
     color="#39ff14">
         Select project
     </Text>

     <Text 
     position={[-0.8, -1.7, 0]}
     fontSize={0.15}
     anchorX="left"
     anchorY="top"
     color="#39ff14">
         Previous
     </Text>

     <Text 
     position={[-0.1, -1.7, 0]}
     fontSize={0.15}
     anchorX="left"
     anchorY="top"
     color="#39ff14">
         Next
     </Text>

    </>);
};
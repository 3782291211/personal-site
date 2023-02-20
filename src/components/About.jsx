import { Cloud, OrbitControls, PerspectiveCamera } from "@react-three/drei";

export function About() {
    return (<mesh>
        <PerspectiveCamera makeDefault fov={65} position={[0, 0, 40]} />
        <OrbitControls/>
        <ambientLight intensity={0.8} />
        <Cloud
        opacity={0.5}
        speed={0.4} // Rotation speed
        width={40} // Width of the full cloud
        depth={1} // Z-dir depth
        segments={40} // Number of particles
        /></mesh>)
}
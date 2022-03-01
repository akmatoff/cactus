import { MeshReflectorMaterial } from "@react-three/drei";

export default function Ground() {
    return (
        <mesh posiiton={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[200, 200]} />
            <MeshReflectorMaterial 
                color={"#222"}
                resolution={1024}
                blur={[690, 610]}
                opacity={0.9}
                metalness={0.95}
                roughness={1}
                mirror={0}
                mixStrength={10}
                mixBlur={0.8}
            />
        </mesh>
    )
}
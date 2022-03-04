import { MeshReflectorMaterial } from "@react-three/drei";
import { primaryColor } from "../common/consts";

export default function Ground() {
    return (
        <mesh receiveShadow posiiton={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[400, 400]} />
            <MeshReflectorMaterial 
                color={"#555"}
                resolution={1024}
                blur={[690, 600]}
                opacity={1}
                metalness={0.8}
                roughness={0.5}
                mirror={0}
                mixStrength={15}
                mixBlur={0.8}
            />
        </mesh>
    )
}
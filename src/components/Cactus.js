import { useGLTF } from "@react-three/drei";

export default function Cactus() {
    const gltf = useGLTF('./assets/cactus with glasses.gltf')

    return <primitive object={gltf.scene} position={[0, 0, 0]} castShadow receiveShadow/>
}
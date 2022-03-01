import { Suspense } from "react"
import { Environment, OrbitControls, Text } from "@react-three/drei"
import Cactus from "./components/Cactus"
import Ground from './components/Ground'

function GreetingText() {
    return (
        <Text
            receiveShadow
            castShadow
            scale={[4, 4, 4]}
            color={"#f1f1f1"}
            position={[0, 0.15, 0.55]}
        >akmatoff.exe</Text>
    )
}

export default function Scene() {
    return (
        <Suspense fallback={"loading..."}>
            <color attach="background" args={["#222"]} />
            <fog attach="fog" args={["#222", 0, 10]} />
            <OrbitControls />
            <Cactus />
            <GreetingText />
            <Ground />
            <Environment background={false} preset="sunset" />
        </Suspense>
    )
}
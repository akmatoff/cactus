import { Suspense } from "react"
import { Environment, OrbitControls } from "@react-three/drei"
import Cactus from "./components/Cactus"
import Ground from './components/Ground'

function HelloText() {
    return (
        <mesh>
            <Text>akmatoff.exe</Text>
        </mesh>
    )
}

export default function Scene() {
    return (
        <Suspense fallback={"loading..."}>
            <color attach="background" args={["#222"]} />
            <fog attach="fog" args={["#222", 0, 10]} />
            <OrbitControls />
            <Cactus />
            <Ground />
            <Environment background={false} preset="dawn" />
        </Suspense>
    )
}
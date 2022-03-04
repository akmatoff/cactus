import { Suspense } from "react"
import { Environment, OrbitControls, CameraShake} from "@react-three/drei"
import { EffectComposer, Glitch } from "@react-three/postprocessing"
import Cactus from "./components/Cactus"
import Ground from './components/Ground'
import { primaryColor } from "./common/consts"

export default function Scene() {
    return (
        <Suspense fallback={"loading..."}>
            <color attach="background" args={[primaryColor]} />
            <fog attach="fog" args={[primaryColor, 0, 15]} />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            <CameraShake intensity={0.5} yawFrequency={0.3} rollFrequency={0.3} />
            <Cactus />
            <Ground />
            <Environment background={false} preset="night" />
            <EffectComposer> 
                <Glitch ratio={2} delay={[2.5, 5.5]} duration={[0.1, 0.5]} strength={[0.2, 0.4]} />
            </EffectComposer>
        </Suspense>
    )
}
import { Suspense } from "react"
import { Environment, OrbitControls, CameraShake} from "@react-three/drei"
import { EffectComposer, Glitch, ToneMapping, BrightnessContrast } from "@react-three/postprocessing"
import Cactus from "./components/Cactus"
import Ground from './components/Ground'
import { primaryColor } from "./common/consts"

export default function Scene() {
    return (
        <Suspense fallback={"loading..."}>
            <color attach="background" args={[primaryColor]} />
            <fog attach="fog" args={[primaryColor, 0, 15]} />
            <spotLight args={['#d5eee5', 0.3]} position={[-5, 12, 2]} castShadow />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            <CameraShake intensity={0.5} yawFrequency={0.3} rollFrequency={0.3} />
            <Cactus />
            <Ground />
            <Environment background={false} preset="night" />
            <EffectComposer>
                <ToneMapping resolution={1024} maxLuminance={2} adaptive={true} />
                <BrightnessContrast brightness={0.002} contrast={-0.02} />
                <Glitch ratio={2} delay={[2.5, 5.5]} duration={[0.1, 0.5]} strength={[0.2, 0.4]} />
            </EffectComposer>
        </Suspense>
    )
}
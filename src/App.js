import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

export default function App() {
    return (
        <div className="App">
            <Canvas>
                <Scene />
            </Canvas>
        </div>
    )
}
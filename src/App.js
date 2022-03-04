import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

export default function App() {
    return (
        <div className="App">
            <Canvas camera={{position: [0.3, 1.8, 3.5]}}>
                <Scene />
            </Canvas>
        </div>
    )
}
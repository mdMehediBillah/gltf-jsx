import { Canvas } from "@react-three/fiber";
import Three from "./components/Three";

function App() {
  return (
    <Canvas className="min-h-screen w-full">
      <Three />
    </Canvas>
  );
}

export default App;

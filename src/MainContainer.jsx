import { OrbitControls  } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import AnimatedStars from "./AnimatedStars";

const MainContainer = () => {
    return <Canvas>
        <color attach="background" args={["#301934"]} />
        <AnimatedStars />
        <OrbitControls />
    </Canvas>
}
 export default MainContainer;
import { OrbitControls  } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import AnimatedStars from "./AnimatedStars";
import { Html } from "@react-three/drei";


const MainContainer = () => {
    return <Canvas>
        <color attach="background" args={["#301934"]} />
        <AnimatedStars />
        <OrbitControls />
        <Html position={[-0.6, 0, 0]}>
        <button class="button is-success is-large is-hovered has-text-success" style = {{backgroundColor: 'transparent', borderTopColor: '#FF6FFF', borderLeftColor: '#FF00FF', borderBottomColor: '#FF00FF', borderRightColor: '#FF6FFF'}}   onClick={() => console.log("Button clicked!")}>
  Click me
</button>

  </Html>
    </Canvas>
}
 export default MainContainer;
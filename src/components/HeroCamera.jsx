import { useFrame } from "@react-three/fiber";

import { easing } from "maath";
import { useRef } from "react"

const HeroCamera = ({ children }) => {
  const groupRef = useRef()

  useFrame((state, delta) => {
    // Maintain original camera position
    easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta)

    // Only rotate specific axis if needed
    easing.dampE(
      groupRef.current.rotation,
      [state.pointer.y * 0.1, -state.pointer.x * 0.1, 0], // Reduced rotation intensity
      0.25,
      delta
    )
  })

  return <group ref={groupRef}>{children}</group>
}
export default HeroCamera
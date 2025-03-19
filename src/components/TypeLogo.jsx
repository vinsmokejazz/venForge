import React, { useRef, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const TypeLogo = (props) => {
  const { nodes, materials } = useGLTF('models/typsc.glb')
  const targetRef = useRef()
  const floatRef = useRef()
  const responsiveScale = props.ismobile ? 1.3 : props.isTablet ? 1.2 : 1.616

  // Smooth float animation
  useGSAP(() => {
    const yPosition = targetRef.current.position.y
    gsap.to(targetRef.current.position, {
      y: yPosition + 0.2, // Reduced bounce height
      duration: 3, // Slower animation
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut", // Smoother easing
      delay: 0.5 // Add slight delay between cycles
    })
  }, [props.position])

  // Cleanup on position change
  useLayoutEffect(() => {
    return () => gsap.killTweensOf(targetRef.current?.position)
  }, [props.position])

  useFrame((state, delta) => {
    floatRef.current.rotation.y += delta * 0.1 // Slower rotation
  })

  return (
    <Float 
      speed={2} // Reduced float speed
      rotationIntensity={0.5} // Less rotation
      floatIntensity={7} // Reduced float height
      ref={floatRef}
    >
      <group 
        {...props} 
        ref={targetRef} 
        dispose={null} 
        scale={responsiveScale}
      >
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials.Material}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials['Material.034']}
          position={[0.272, -0.275, 0.121]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={6.014}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('models/typsc.glb')
export default TypeLogo
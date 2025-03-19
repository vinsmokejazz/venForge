
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TypeLogo=(props)=> {
  const { nodes, materials } = useGLTF('/typsc.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={1.616}>
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
    </group>
  )
}

useGLTF.preload('/typsc.glb')
export default TypeLogo

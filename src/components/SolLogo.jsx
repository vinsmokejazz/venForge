
import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const SolLogo=(props)=> {
  const { nodes, materials } = useGLTF('/public/models/solana.glb')
  return (
    <Float{...props} dispose={null} floatIntensity={3}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials['Scene_-_Root']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </Float>
  )
}

useGLTF.preload('/public/models/solana.glb')

export default SolLogo
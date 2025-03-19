
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const SolLogo=(props)=> {
  const { nodes, materials } = useGLTF('/public/models/solana.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials['Scene_-_Root']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/public/models/solana.glb')

export default SolLogo
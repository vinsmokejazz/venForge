import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const NodeLogo=(props)=>{
  const { nodes, materials } = useGLTF('/models/node.glb')
  return (
    <Float {...props} dispose={null} floatIntensity={1.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials['Material.001']}
        position={[-0.038, -0.018, -0.035]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials['Material.001']}
        position={[0.056, 0.012, -0.032]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={100}
      />
    </Float>
  )
}

useGLTF.preload('/public/models/node.glb')

export default NodeLogo
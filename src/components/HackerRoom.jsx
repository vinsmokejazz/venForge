import React from 'react';
import { useGLTF } from '@react-three/drei';

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF('/models/wall-e.glb'); // Updated asset path if needed

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.56, -0.019]} scale={0.533}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['Material.001']}
          position={[0.669, 1.716, -0.143]}
          rotation={[-0.175, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['Material.001']}
          position={[0.669, 1.716, 0.144]}
          rotation={[0.175, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials['Material.001']}
          position={[0.739, 1.528, -1.422]}
          rotation={[-2.036, -0.994, -0.399]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials['Material.001']}
          position={[1.149, -0.981, 1.422]}
          rotation={[1.692, -0.606, 0.069]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials['Material.001']}
          position={[-0.137, 0.016, -1.01]}
          rotation={[0, 0, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials['Material.001']}
          position={[-0.285, 0.016, 1.01]}
          rotation={[0, 0, -0.609]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials['Material.001']}
          position={[1.231, -1.038, 1.422]}
          rotation={[1.692, -0.606, -0.45]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials['Material.001']}
          position={[1.231, -1.038, 1.422]}
          rotation={[1.692, -0.606, -0.526]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials['Material.001']}
          position={[0.789, 1.614, -1.422]}
          rotation={[-2.016, -0.963, -0.845]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials['Material.001']}
          position={[0.789, 1.614, -1.422]}
          rotation={[-2.06, -1.02, -0.757]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/wall-e.glb'); // Updated asset path if needed

export default HackerRoom;

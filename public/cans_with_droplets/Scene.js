/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: ibotpl (https://sketchfab.com/ibotpl)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/cans-with-droplets-61e818dd2eff4da9b98857c631c30b06
title: Cans with Droplets
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes['250ml_drops_water_0'].geometry} material={nodes['250ml_drops_water_0'].material} />
            <mesh
              geometry={nodes['250ml_drops_water_0_1'].geometry}
              material={nodes['250ml_drops_water_0_1'].material}
            />
          </group>
          <group
            position={[-0.05, 6.29, -7.45]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
            scale={[93.61, 94.15, 87.79]}>
            <mesh geometry={nodes['330ml_drops_water_0'].geometry} material={nodes['330ml_drops_water_0'].material} />
            <mesh
              geometry={nodes['330ml_drops_water_0_1'].geometry}
              material={nodes['330ml_drops_water_0_1'].material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, -Math.PI / 4]} scale={[71.4, 71.4, 71.4]}>
            <mesh geometry={nodes['250ml_can_body_0'].geometry} material={nodes['250ml_can_body_0'].material} />
          </group>
          <group position={[0, 0, -7.53]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} scale={[93.61, 94.15, 87.79]}>
            <mesh geometry={nodes['330ml_can_body_0'].geometry} material={nodes['330ml_can_body_0'].material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

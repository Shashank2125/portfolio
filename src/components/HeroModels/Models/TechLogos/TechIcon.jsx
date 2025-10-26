import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import { color } from 'three/tsl';
import * as THREE from 'three';
//-load a glb model (GLTF format)
//-Adds basic lighting
//-apply enviorment reflection for realism
//-wrap model in floating animation
//-Optionally tweaks the material(like setting a white color on a specific mesh)
//-Disables zoom using OrbitControls

const TechIcon = ({model}) => {
  const scene=useGLTF(model.modelPath);

  useEffect(()=>{
    if(model.name==='Interactive Developer'){
      scene.scene.traverse((child)=>{
        if(child.isMesh && child.name==='Object_5'){
          child.material=new THREE.MeshStandardMaterial({color:0xB8860B , metalness:1,roughness:0.4,})
        }
      })
    }

  },[scene])
  return (
   <Canvas>
    <ambientLight intensity={0.3}/>
    <directionalLight position={[5,5,5]} intensity={1}/>
    <Environment preset='city'/>
    <OrbitControls enableZoom={false}/>

    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <group scale={model.scale} rotation={model.rotation} position={model.position}>
        <primitive object={scene.scene}/>
      </group>
    </Float>

   </Canvas>
  )
}

export default TechIcon
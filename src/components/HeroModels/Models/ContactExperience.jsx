import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Computer } from './Computer-optimized'

const ContactExperience = () => {
  return (
    <Canvas camera={{position: [0,3,7], fov:45}} shadows>
        <ambientLight intensity={0.5} color={'#B026FF'}/>
        <directionalLight position={[5,5,3]} intensity={2.5} color={'#ffd9b3'}/>
        <directionalLight position={[5,9,1]}
        castShadow
        intensity={2.5}
        color="#7A00CC"
        />
        <spotLight
        position={[-5,5,5]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow/>
       
        <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI/5}
        maxPolarAngle={Math.PI/2}/>
        <group scale={0.03} position={[0,-1.5,-2]} castShadow>
            <Computer/>
        </group>
        <group scale={[1,1,1]}>
          <mesh receiveShadow position={[0,-1.5,0]} rotation={[-Math.PI/2,0,0]}>
          <planeGeometry args={[30,30]}/>
          <meshStandardMaterial color="#B026FF"/>

            </mesh>  

        </group>

    </Canvas>
  )
}

export default ContactExperience
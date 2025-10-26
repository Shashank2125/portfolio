import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import Particles from './particle'

const HeroExperience = () => {
  const isTablet=useMediaQuery({query:'(max-width:1024px)'});
  const isMobile=useMediaQuery({query:'(max-width:768px)'});
  return (
    <Canvas camera={{position: [0,0,15],fov: 45}}>
       
        <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}//if not on tablet then zoom
        maxDistance={20}//zoom in dist
        minDistance={5}//zoom out dist
        minPolarAngle={Math.PI/5}//setting up the angle to look at
        maxPolarAngle={Math.PI/2}
        />
        <HeroLights/>
        <Particles count={70}/>
      <group
      scale={isMobile? 0.7:1}
      position={[0,-3.5,0]}
      rotation={[0,-Math.PI/4,0]}//rotate the obj slightly
      >
      <Room/>
      
      </group>
   

    </Canvas>
  )
}

export default HeroExperience
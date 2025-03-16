import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"

const Hero=()=>{

  const ismobile=useMediaQuery({maxWidth:768})


  const x =useControls('HackerRoom',{
    positionX: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10
    },
    rotationX: {
      value: 2.5,
      min: -10,
      max: 10
    },
    rotationY: {
      value: 2.5,
      min: -10,
      max: 10
    },
    rotationZ: {
      value: 2.5,
      min: -10,
      max: 10
    },
    scale :{
      value:2,
      min:0.1,
      max:10
   }



  })

  return(
    <section className="min-h-screen w-full flex flex-col relative">

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Venu Prasad...
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products!</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva/>
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader/>}>

          

          <PerspectiveCamera makeDefault position={[0,0,30]}/>

          <HackerRoom 
           scale= {ismobile? 2:3.5} 
           position={ismobile?[-0.3,1.5,0.3]:[-0.3,-6.5,0.3]} 
           rotation={[0,5,0]} 
           />
           <group>
            
           </group>

          <ambientLight intensity={15} />
          <directionalLight position={[10,10,10]} intensity={4} />

          </Suspense>
        </Canvas>

      </div>

    </section>
  ) 

}

export default Hero
import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import Target from "../components/Target"
import ReactLogo from "../components/ReactLogo"
import StyleKeyBoard from "../components/StyleKeyBoard"
import SolLogo from "../components/SolLogo"
import NodeLogo from "../components/NodeLogo"
import TypeLogo from "../components/TypeLogo"

const Hero = () => {

  const ismobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ query: '(max-width: 1024px) and (min-width: 768px)' });


  // const x = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   scale: {
  //     value: 2,
  //     min: 0.1,
  //     max: 10
  //   }
  // })

  return (
    <section className="min-h-screen w-full flex flex-col relative">

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Venu Prasad...
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products!</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>



            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HackerRoom
              scale={ismobile ? 2 : isTablet ? 2.8 : 3.5}
              position={ismobile ?
                [-0.3, 1, 0.3] :
                isTablet ? [-0.3, -3.5, 0.3]
                  : [-0.3, -7, 0.3]}
              rotation={[0, 5, 0]}
            />


<group>
  <TypeLogo
    position={ismobile ? [-6, -0.8, 0] : isTablet ? [-9, -6, 2] : [-12, -10, 3]}
    rotation={[0,0,0.3]}
    scale={ismobile ? 0.7 : isTablet ? 0.5 : 0.95}
  />
  <ambientLight intensity={-15} />

  <ReactLogo 
    position={ismobile ? [6, 6, 5] : isTablet ? [10, 3.5, 5] : [15, 5, 5]}
    scale={ismobile ? 0.5 : isTablet ? 0.6 : 0.8}
  />

  <StyleKeyBoard 
    position={ismobile ? [6, 0, 5] : isTablet ? [10, -3.5, 5] : [15, -8, 5]}
    rotation={[1, 7, 0]}
    scale={ismobile ? 0.45 : isTablet ? 0.6 : 0.8}
  />

  <SolLogo 
    position={
      ismobile 
        ? [-3.1, 4.5, 5]  
        : isTablet 
        ? [-5, 2.5, 3]     
        : [-7, 1, 1.5]    
    }
    rotation={[1.1, Math.PI/6, 0]}
    scale={
      ismobile 
        ? 0.55 
        : isTablet 
        ? 0.8  
        : 1.2
    }
  />

  <NodeLogo  
    position={
      ismobile 
        ? [3.4, 2.5, 5]   
        : isTablet 
        ? [5, -1, 3]      
        : [7, -3, 1]      
    }
    rotation={[0, 0, -0.5]}
    scale={
      ismobile 
        ? 2.5
        : isTablet 
        ? 4   
        : 5.3   
    }
  />
</group>

            <ambientLight intensity={15} />
            <directionalLight position={[10, 10, 10]} intensity={4} />

          </Suspense>
        </Canvas>

      </div>

    </section>
  )

}

export default Hero
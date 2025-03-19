import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import ReactLogo from "../components/ReactLogo"
import StyleKeyBoard from "../components/StyleKeyBoard"
import SolLogo from "../components/SolLogo"
import NodeLogo from "../components/NodeLogo"
import TypeLogo from "../components/TypeLogo"
import Cube from "../components/Cube"
import { calculateSizes } from "../constants"

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 480 }) // Added small screen detection
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ query: '(max-width: 1024px) and (min-width: 768px)' })
  const responsiveSizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Venu Prasad...
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products!</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            
            <HackerRoom {...responsiveSizes.HackerRoom} />

            <group>
              <TypeLogo {...responsiveSizes.TypeLogo} />
              <ambientLight intensity={-15} />
              <ReactLogo {...responsiveSizes.ReactLogo} />
              <StyleKeyBoard {...responsiveSizes.StyleKeyBoard} />
              <SolLogo {...responsiveSizes.SolLogo} />
              <NodeLogo {...responsiveSizes.NodeLogo} />
              <Cube {...responsiveSizes.Cube} />
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
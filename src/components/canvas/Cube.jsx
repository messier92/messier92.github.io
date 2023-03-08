import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Cube = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={0.5} rotationIntensity={0.5} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-1}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const CubeCanvas = ({ icon, link }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      className="cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Cube imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CubeCanvas;
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei';
import Avatar from './Avatar'; // Adjust the path based on your project structure


const position = [0, -1, 0];
const ThreeJsComponent = () => (
  <>
    <OrbitControls 
      enableRotate={true}
      enablePan={false}
      enableZoom={false}
      maxZoom={2}
      minPolarAngle={Math.PI/2}
      maxPolarAngle={Math.PI/2}
    />
    <Environment preset="warehouse" />
    <group position={position} position-rotateZ={2}>
      <ContactShadows 
        opacity={0.50} 
        scale={20} 
        blur={1} 
        far={40} 
        resolution={256} 
        color="#000000" 
      />
      <Avatar position-Y={-0.20} />
      {/* Additional components */}
    </group>
  </>
);

const App = () => (
  <React.StrictMode>
    <Canvas>
      <OrbitControls />
      <Environment preset="warehouse" />
      <group>
        <ContactShadows 
          opacity={0.50} 
          scale={8} 
          blur={1} 
          far={40} 
          resolution={256} 
          color="#000000" 
        />
        <Avatar position-Z={4} />
        <ThreeJsComponent />
      </group>
    </Canvas>
  </React.StrictMode>
);

createRoot(document.getElementById('root')).render(<App />);
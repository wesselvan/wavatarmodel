/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
// import { useControls } from "leva";
import { useEffect } from 'react';
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";


export default function Avatar(props) {

  
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/wevatar.glb");

const { animations: wavingAnimation } = useFBX("/animations/Waving.fbx");
const { animations: standingAnimation } = useFBX("/animations/StandingIdle.fbx");
const { animations: backflipAnimation } = useFBX("/animations/Backflip.fbx");

wavingAnimation[0].name = "Waving";
standingAnimation[0].name = "Standing";
backflipAnimation[0].name = "Backflip";

const { actions } = useAnimations([wavingAnimation[0], standingAnimation[0], backflipAnimation[0]], group);


// // const [headFollow, setHeadFollow] = useState(false); // Set default to true
// const [cursorFollow, setCursorFollow] = useState(true); // Set default to true

// useFrame((state) => {
//   // if (headFollow) {
//   //   group.current.getObjectByName("Head").lookAt(state.camera.position);
//   // }
//   if (cursorFollow) {
//     const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 3);
//     group.current.getObjectByName("Spine1").lookAt(target);
//   }
// });




useEffect(() => {
  if (actions) {
    actions["Standing"].reset().play();

    setTimeout(() => {
      actions['Waving'].reset().crossFadeFrom(actions["Standing"], 0.5, false).play();

      setTimeout(() => {
        actions["Standing"].reset().crossFadeFrom(actions["Waving"], 0.5, false).play();
      }, wavingAnimation[0].duration * 4000);
    }, 3000);
  }
  return () => {
    // Cleanup logic if needed
  }
}, [actions]);

function handleClick(event) {
  if (actions) {
    actions['Backflip'].reset().crossFadeFrom(actions["Standing"], 0.35, false).play();

    setTimeout(() => {
      actions["Standing"].reset().crossFadeFrom(actions["Backflip"], 0.35, false).play();
    }, backflipAnimation[0].duration * 1000);
  }
}

function handleTag(event) {
  if (actions) {
    actions['Waving'].reset().crossFadeFrom(actions["Standing"], 0.35, false).play();

    setTimeout(() => {
      actions["Standing"].reset().crossFadeFrom(actions["Waving"], 0.35, false).play();
    }, backflipAnimation[0].duration * 1000);
  }
}

return (
    <group {...props} ref={group} dispose={null} onClick={handleClick} scale={1.3}  >
      <group >
      <primitive object={nodes.Hips} />
      <skinnedMesh          
        castShadow
        receiveShadow
        geometry={nodes.avaturn_body.geometry}
        material={materials.avaturn_body_material}
        skeleton={nodes.avaturn_body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.avaturn_hair_0.geometry}
        material={materials.avaturn_hair_0_material}
        skeleton={nodes.avaturn_hair_0.skeleton}
      />
      <skinnedMesh
        geometry={nodes.avaturn_shoes_0.geometry}
        material={materials.avaturn_shoes_0_material}
        skeleton={nodes.avaturn_shoes_0.skeleton}
      />
      <skinnedMesh
        geometry={nodes.avaturn_look_0.geometry}
        material={materials.avaturn_look_0_material}
        skeleton={nodes.avaturn_look_0.skeleton}
      />
      </group>
    </group>
  );
}

useGLTF.preload("/models/wevatar.glb");
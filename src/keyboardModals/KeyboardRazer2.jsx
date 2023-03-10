/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 keyboardRazerHuntsman_v2_tenkeyless.glb
Author: gimora (https://sketchfab.com/gimora)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/keyboard-razer-huntsman-v2-tenkeyless-9d8710e7ef3e4fc9b031197470eabbba
Title: Keyboard - Razer Huntsman V2 Tenkeyless
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import * as THREE from "three";

export function Razer(props) {
  const group = useRef()
  const underRef= useRef()

  const { nodes, materials }= useGLTF('/models/keyboardRazerHuntsman_v2_tenkeyless.glb')
  let camera = useThree(state => state.camera)
  
  const draco = new DRACOLoader();
  draco.setDecoderConfig({ type: 'js' });
  draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
  

  useLayoutEffect(() =>{    
    camera.position.set(0, 2, 6)

    let fov = camera.fov

    fov = (1400 * 55)/ window.innerWidth 
    camera.fov = fov
    camera.updateProjectionMatrix()


    let mm = gsap.matchMedia();

      mm.add({

      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: 48em)`,
      isMobile: `(max-width: 48em)`,

    }, (context) => {

      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let { isDesktop, isMobile } = context.conditions;

        if(isMobile){
          fov = (1400 * 30)/ window.innerWidth 
          camera.fov = fov
          camera.updateProjectionMatrix()
        }

      return () => { 
        // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
        // it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
      }
    });
  },[]) 


  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.kbA_kbA_0.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh ref={underRef} geometry={nodes.kbB_kbB_0.geometry} material={materials.material_1} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/keyboardRazerHuntsman_v2_tenkeyless.glb')

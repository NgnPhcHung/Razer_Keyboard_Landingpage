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

  const { nodes, materials, animations }= useGLTF('/models/keyboardRazerHuntsman_v2_tenkeyless.glb')
  const { actions, mixer } = useAnimations(animations, group)
  let camera = useThree(state => state.camera)
  let scene = useThree(state => state.scene)
  
  const draco = new DRACOLoader();
  draco.setDecoderConfig({ type: 'js' });
  draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
  
  const playAnim =() =>{
    let anim = actions.Open
    anim.clampWhenFinished = true
    anim.reset()
    anim.timeScale= 1
    anim.setLoop(THREE.LoopOnce, 1)
    anim.play()
    return () =>{
      anim.paused = false
      anim.setDuration = -1
      anim.timeScale = -1
    }
  }

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
      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#keyboard-model",
          start: "top+=400 top",
          endTrigger: "#battery",
          end: "bottom+=400 center ",
          scrub: 1,
        }
      })
      tl1.fromTo(camera.position, { y: isDesktop? 6:15}, { y: 0,}, 'key1')//video section
        .to(scene.rotation, { x: 0.8}, 'key1')
        .to(scene.rotation, {  z: -3.9, y: 0.2, x: 1.32 })//design section
        .to(scene.rotation, {  z: .25, y: -0.73, x: 0.3 })
        .to(camera.position, {x: 1.5, y: -0.3}, 'key2')
        .to(scene.rotation, {  z: -0.68, x: 0.3 }, 'key2')
        .to(camera.position, {x: isDesktop? -0.67: -0.4, y: 1.3}, 'key3') //chroma section
        .to(scene.rotation, {  z: -0.43, y: 0.339, x:  1.731 }, 'key3')
        .to(camera.position, {x: isDesktop? -3.5: 0.4, y: isMobile? 1.3: -1.4}, 'key4')
        .to(scene.rotation, {  x: 1.67,y: isDesktop? 0.339: 0, z: isDesktop?-0.59: 0}, 'key4')
        .to(scene.rotation, {  z:  0 , y: isDesktop? -1.57: 0, x: isDesktop? 1.5: .3 }, 'key5') //battery section
        // .to(scene.position, {x: 2, y: -0.5, z: isDesktop? -2.72: -2}, 'key5')
        .to(camera.position, {x: isDesktop? -2: 0, y: -.3, z: 7}, 'key5')
        .to(camera.position, {x:  isDesktop? -3: 0, y:  isDesktop?  -0.7: -10, z: isMobile ? 10: 3}, 'key6') //color section
        .to(scene.rotation, { z: isDesktop? -.3:0, y:  isDesktop?  0.8: 0, x: isDesktop? .9: 1.5}, 'key6')
        .to(scene.position, { x: isMobile? 0 : 1 ,y: isMobile? 2: -1, z: isMobile ? 2: -4}, 'key6')

        if(isMobile){
          fov = (1400 * 30)/ window.innerWidth 
          camera.fov = fov
          camera.updateProjectionMatrix()
        }

      return () => { 
        // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
        // it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
      if(tl1) tl1.kill()
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

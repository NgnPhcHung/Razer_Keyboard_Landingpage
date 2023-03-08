import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import styled from 'styled-components'
import { AdaptiveDpr, AdaptiveEvents, Environment, Html, useProgress } from '@react-three/drei'
import { Razer } from '../keyboardModals/KeyboardRazer'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`

const Loading = styled.div`
  width: 40rem;
  height: 40rem;
  position: fixed;
  background-color: red;
  top: 0;
  z-index: 2;
  background-color: transparent;
`

function Loader() {
  const { progress } = useProgress()
  return <Html center>
    <Loading>{progress} % loaded</Loading>
  </Html>
}

const KeyboardModel = () => {
  return (
    <Container id='keyboard-model' >
      <Canvas camera={{fov: 14}} >
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} position = {[ -0.43  ,-2, 0]} />
        <Suspense fallback={null} >
          <Razer/>
        </Suspense>
        <Environment preset="night" />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>
    </Container>
  )
}

export default KeyboardModel
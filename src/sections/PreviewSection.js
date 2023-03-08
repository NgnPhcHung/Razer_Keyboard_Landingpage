import { AdaptiveDpr, AdaptiveEvents, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Suspense } from 'react'
import styled from 'styled-components'
import { Razer } from '../keyboardModals/KeyboardRazer2'

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: var(--white);
  overflow: hidden;
  position: relative;
`
const Keyboard = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`
const Title = styled.h1`
  width: 80%;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--fontxl);
  color: var(--greyLight);
  text-align: center;
`
const TextBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  position: absolute;
  width: 80%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  
`
const Name = styled.h2`
  font-size: var(--fontlg);
  text-align: center;
  background-image: linear-gradient(90deg, var(--chromagradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`
const KeyboardType = styled.h1`
  font-size: var(--fontxxl);
  color: var(--greyLight);
  text-align: center;

  @media screen and (max-width: 70em) {
    font-size: var(--fontlg);
  }
`
const PreviewSection = () => {
  return (
    <Section>
      <Title>
        360&deg; View  &#x27F2; 
      </Title>
      <Keyboard>
        <Canvas camera={{rotateY: 10, rotateX: -1.5}} >
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.4} position = {[ -0.43  ,-2, 0]} />
          <OrbitControls autoRotate={[1,0,0]} enableZoom={false} />
          <Suspense fallback={null} >
            <Razer/>
          </Suspense>
          <Environment preset="night" />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
        </Canvas>
      </Keyboard>
      <TextBlock>
        <Name>Razer</Name>
        <KeyboardType>
        Razer Huntsman V2 TKL Tenkeyless
        </KeyboardType>
      </TextBlock>
    </Section>
  )
}

export default PreviewSection
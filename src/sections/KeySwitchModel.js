import { Canvas } from '@react-three/fiber'
import React, { Suspense} from 'react'
import styled from 'styled-components'
import { MechanicalSwitch } from '../keyboardModals/MechanicalSwitch'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: -25%;
  left: -25%;
  z-index: 2;
  background-color: transparent;

  @media screen and (max-width: 70em){
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const KeySwitchModel = () => {

  return (
    <Container id='switch-model' >
      <Canvas >
        <ambientLight intensity={0.89} />
        <directionalLight intensity={0.4} position = {[ 0.43  , 1.48, 0]} />
        <Suspense fallback={null} >
          <MechanicalSwitch />
        </Suspense>
      </Canvas>
    </Container>
  )
}

export default KeySwitchModel
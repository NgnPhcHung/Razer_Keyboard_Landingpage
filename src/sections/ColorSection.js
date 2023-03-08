import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import KeySwitchModel from './KeySwitchModel'
import { ColorContext } from '../context/ColorContext'

//#region STYLE
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
  @media screen and (max-width: 48em) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;
  @media screen and (max-width: 48em) {
    display: none;
  }
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);
  
  @media screen and (max-width: 48em) {
    top: 2rem;
    transform: translate(-50%, 0%) rotate(0deg);
  }
`;

//#endregion

const ColorSection = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  const { currentColor, changeColorContext } = useContext(ColorContext);

  useEffect(() => {
    let rightElem = rightRef.current;
    let leftElem = leftRef.current;
    let textElem = textRef.current;

    textElem.innerText = currentColor.text;
    textElem.style.color = currentColor.color;

    rightElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
    leftElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`;
  }, [currentColor]);
  

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

    let updateColor = (color, text, rgbColor) => {
      const colorObj = {
        color,
        text,
        rgbColor,
      };
      changeColorContext(colorObj);
    };

    gsap.to(Elem,{
      scrollTrigger: {
        trigger:Elem, 
        start: 'top top',
        end: `+=${Elem.offsetWidth +1000}` ,
        scrub: true,
        pin: true,
        pinSpacing: true,
      }
    })
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: 1,
      },
    })
    .to(
      Elem, 
      {
        onStart: updateColor,
        onStartParams:['#13C612', 'RAZER™ Green', '124, 214, 109'],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ['#13C612', 'RAZER™ Green', '124, 214, 109']
      }
    )
    .to(
      Elem, 
      {
        onStart: updateColor,
        onStartParams:['#C56A00', 'RAZER™ Orange', '221, 108, 43'],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ['#C56A00', 'RAZER™ Orange', '221, 108, 43']
      }
    )
    .to(
      Elem, 
      {
        onStart: updateColor,
        onStartParams:['#D7BB1F', 'RAZER™ YELLOW', '225, 199, 52'],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ['#D7BB1F', 'RAZER™ YELLOW', '225, 199, 52']
      }
    )
    .to(
      Elem, 
      {
        onStart: updateColor,
        onStartParams:['#B50808', 'RAZER™  Optical Switch', '181, 8, 8'],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ['#B50808', 'RAZER™  Optical Switch', '181, 8, 8']
      }
    )
    return () => {
      if (tl) tl.kill();
    };
  },[])

  return (
    <Section ref={sectionRef} id='colors' >
      <Left ref = {leftRef} >
        <KeySwitchModel/>
      </Left>
      <Center ref={textRef} />
      <Right ref={rightRef}>
      </Right>
    </Section>
  )
}

export default ColorSection
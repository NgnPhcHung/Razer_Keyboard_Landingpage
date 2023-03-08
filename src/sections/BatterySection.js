import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

//#region STYLE
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--white);
`
const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -50%);

  text-transform: uppercase;
  font-size: var(--fontBig);
  z-index: 1;

  @media screen and (max-width: 70em){
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em){
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em){
    font-size: var(--fontlg);
    transform: none;
    left: 2rem;
    top: 2rem;
    width: 50%;
  }
`
const Battery = styled.ul`
  position: absolute;
  right: 4rem;
  list-style: none;
  background-color: var(--white);
  border: 3px solid var(--green);
  border-radius: 8px;
  padding: 0.5rem;
  width: 15rem;

  li{
    width: 100%;
    height: 5rem;
    background-color: var(--dark);
    background-image: linear-gradient(90deg, var(--chromagradient));
    opacity: 0;
  }

  &>*:not(:first-child):not(:last-child){
    margin: 0.5rem 0;
  }

  
  @media screen and (max-width: 48em){
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
//#endregion

const BatterySection = () => {
  const battery = useRef(null)
  let element = gsap.utils.selector(battery)

  useLayoutEffect(() =>{
    let tl = gsap.timeline({})
    element('li').forEach(el =>{
      tl.to(el, {
        scrollTrigger:{
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }, opacity: 1
      })
    })
  },[])

  return (  
    <Section id='battery' >
      <Battery ref={battery} >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </Battery>
      <Title>Use whole week with single charge...</Title>
    </Section>
  )
}

export default BatterySection
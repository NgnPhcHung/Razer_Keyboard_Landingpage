import React, { useLayoutEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

//#region STYLE 
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextContainer= styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--dark);
  color: var(--white);
`
const moveUp = keyframes`
  100%{transform: translateY(0);}
`
const Text= styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;

  span{
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${props => props.delay};
    font-family: var(--fontL);
    background-image: linear-gradient(160deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .author{
    width: 100%;
    text-align: end;
    background-image: linear-gradient(-45deg, var(--gradient));
    font-family: var(--fontR);
  }

  @media screen and (max-width: 70em) {
    width: 70%;
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontmd) ;
    height: var(--fontsm)
  }
  @media screen and (max-width: 40em) {
    width: 90%;
  }
  @media screen and (max-width: 30em) {
    font-size: var(--fontxs)
  }
`
//#endregion

const Quotes = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  useLayoutEffect(() =>{
    let element = sectionRef.current
    let trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      pin: true,
      pinSpacing: false,
    })
    return () => {
      if(trigger) trigger.kill()
    }
  },[])

  return (
    <Section ref={sectionRef} id='quotes'>
      <TextContainer>
        <Text delay='0s'><span>&#8220;If you feeling exhausted </span></Text>
        <Text delay='0.3s'><span>&nbsp;&nbsp;&nbsp;Then don't feel exhausted anymore&#8221;</span></Text>
        <Text delay='1.6s'><span className='author'>&#x23AF;Nguyễn Phúc Hưng</span></Text>
      </TextContainer>
    </Section>
  )
}

export default Quotes
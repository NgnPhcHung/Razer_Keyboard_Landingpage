import React from 'react'
import styled, { keyframes } from 'styled-components'
import  RazerChroma from '../assets/Images/chromapanel-razer-chroma-logo.png'
//#region STYLE
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--dark);
  color: var(--white);
  overflow: hidden;
`
const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%);
  font-size: var(--fontBig);
  font-family: var(--fontL);
  z-index: 1;
  background-image: linear-gradient(15deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em){
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em){
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em){
    font-size: var(--fontxl);
  }
`
const glow = keyframes`
  0%{
    box-shadow: 0px -10px 15px -6px #17BB65,
                0px  5px  15px  0px #F33939,
                5px  0px  15px  0px #398FF3,
                -5px  0px  15px  0px #F339F3;
    transform: rotate(0deg);
  }
  50%{
    box-shadow: 0px -10px 25px -6px #17BB65,
                0px  5px  25px  0px #F33939,
                5px  0px  25px  0px #398FF3,
                -5px  0px  25px  0px #F339F3;
    transform: rotate(180deg);
  }
  100%{
    box-shadow: 0px -10px 15px -6px #17BB65,
                0px  5px  15px  0px #F33939,
                5px  0px  15px  0px #398FF3,
                -5px  0px  15px  0px #F339F3;
    transform: rotate(360deg);
  }
`
const Image = styled.div`
  width: 20%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* animation: ${glow} 2s  ease infinite; */
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 2;
  .rotator{
    position: absolute;
    width: 95%;
    height: 95%;
    animation: ${glow} 2s  ease infinite;
    z-index: 1;
    border-radius: 50%;
  }
  img{
    width: 100%;
    height: auto;
    z-index:2;
  }

  
  /* @media screen and (max-width: 48em){
    display: none;
  } */
`
const Text= styled.div`
  font-size: var(--fontmd);
  color: var(--greyLight);
  width: 30%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span{
    margin: 0.2rem 0;
    padding-left: 2rem;
  }
  @media screen and (max-width: 64em){
    font-size: var(--fontxs);
    width: 50%;
    height: 70vh;
    justify-content: space-around;
  }
  @media screen and (max-width: 48em){
    width: 100%;
    font-size: var(--fontxxs);

    span{
      width: 40%;
      padding-left: 1rem;
    }

    &>*:last-child{
      align-self: flex-end;
      padding-left: 0;
      padding-right: 1rem;
      text-align: right;
    }
  }
  
`
//#endregion

const ChromaSection = () => {

  return (
    <Section>
      <Title>EASY FOR CUSTOMIZE</Title>
      <Image>
        <img src={RazerChroma} alt="chroma" />
        <span  className="rotator"/>
      </Image>
      <Text>
        <span>
          With 16.8 million color options and a wide range of lighting effects, you get endless ways to personalize your experience.
        </span> 
        <span>
        Designed to provide secure support for long hours of play, the soft, cushioned wrist rest also features Razer Chroma™ RGB—which perfectly lines up with the keyboard’s underglow.  
        </span> 
      </Text>
    </Section>
  )
}

export default ChromaSection
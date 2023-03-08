import React from "react";
import styled from "styled-components";
import backgroundVideo from '../assets/video/Ink - 21536.mp4'
//#region STYLE
const Section = styled.section`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--dark);
  overflow: hidden;
`;
const Title = styled.h1`
  position: absolute;
  top: 2rem;
  left: 2rem;

  font-size: var(--fontlg);
  font-family: var(--fontL);
  color: var(--greyLight);
  
  @media screen and (max-width: 48em) {
    font-size: var(--fontmd);
    left: 1rem;
  }
  @media screen and (max-width: 30em) {
    width: 70%;
    color: var(--white);
  }
`;
const TextContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(120deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 2;

  span{
    font-size: var(--fontxxl);
    text-transform: uppercase;
    font-weight: 600;
    padding: 2rem;

    @media screen and (max-width: 64em) {
      font-size: var(--fontxxl);
      padding: 0;
    }
    @media screen and (max-width: 48em) {
      font-size: var(--fontxl);
    }
  }

  
  @media screen and (max-width: 48em) {
    flex-direction: column;
    background-image: linear-gradient(120deg, var(--gradient));
    align-items: flex-start;
    filter: brightness(1.1);
        
    &>*:last-child{
      align-self: flex-end;
    }

    height: 80vh;
    padding: 0 1rem;
  }  
`;
const VideoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;


  .overlay{
    width: 100vw;
    min-height: 100vh;
    position: absolute;
    background: linear-gradient(-90deg,rgb(255, 30, 30,0.4), rgb(107, 198, 237,0.4));
    z-index: 1;
  }
  
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
  }
`
//#endregion

const HeroSection = () => {
  return (
    <Section>
      <VideoContainer>
        <div className="overlay"/>
        <video src={backgroundVideo} type='video/mp4' autoPlay muted loop/>
      </VideoContainer>
      <Title>Professional Keyboard</Title>
      <TextContainer>
        <span>So.strong</span>
        <span>So.cool</span>
      </TextContainer>
    </Section>
  );
};

export default HeroSection;

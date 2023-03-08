import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

//#region Style
const Section = styled.section`
  width: 100vw;
  height: 200vh;
  position: relative;

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--white);

  & > *:nth-child(even) {
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;

    @media screen and (max-width: 48em) {
      margin-right: 1rem;
    }
  }
  & > *:nth-child(odd) {
    margin-left: 4rem;

    @media screen and (max-width: 48em) {
      margin-left: 1rem;
    }
  }
`;
const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);
  background-image: linear-gradient(160deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 60%;
  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }

  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
`;
const TextBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;
const TextBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;
const Title = styled.div`
  font-size: var(--fontlg);
  margin-bottom: 1rem;
  text-transform: uppercase;
`;
const Text = styled.div`
  font-size: var(--fontmd);
  color: var(--greyLight);
  margin-bottom: 0.5rem;
  width: 55%;
  
  @media screen and (max-width: 64em) {
    width: 70%;
  }
  
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
  }
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(-25deg);
  z-index: 1;
  margin-bottom: 4rem;
`;
const MovingText = styled.h1`
  font-size: var(--fontxxxl);
  font-family: var(--fontL);
  background-image: linear-gradient(120deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  
  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }

  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontmd);
  }
`;
//#endregion

const DisplaySection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);
  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=250 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "16%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

    return () => {
      if (tl) tl.kill();
    };
  }, []);
  return (
    <Section>
      <MainTitle>
        Impressive
        <br />
        Layout
      </MainTitle>
      <TextBlockRight>
        <Title>80 MILLION KEYSTROKE LIFESPAN</Title>
        <Text>
          Enjoy a level of reliability catered for competitive play, as the
          switches on this tenkeyless mechanical gaming keyboard are equipped to
          handle years and years of constant gaming.
        </Text>
      </TextBlockRight>
      <TextBlockLeft ref={container}>
        <Title>ALUMINUM CONSTRUCTION</Title>
        <Text>
          To complement its tough keycaps,this product topframe is tanky enough
          to take long hours of intense, regular use and has a clean matte
          finishing.
        </Text>
      </TextBlockLeft>
      <TextContainer>
        <MovingText ref={textTwo}>ENDLESS CUSTOMIZATION</MovingText>
        <MovingText ref={textOne}>WIRELESS PERFORMANCE </MovingText>
      </TextContainer>
    </Section>
  );
};

export default DisplaySection;

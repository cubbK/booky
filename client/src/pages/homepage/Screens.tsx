import * as React from "react";
import styled from "styled-components";
import phone from "./phone.png";
import screen from "./screen.png";

const Container = styled.section`
  background-color: #f5f5f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

const Title = styled.h3`
  font-family: ${props => props.theme.titleFamilyFont};
  font-size: 42px;
  font-weight: 300;
  margin-top: 120px;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: 650px) {
    margin-top: 50px;
  }
`;

const StylishLine = styled.div`
  height: 2px;
  width: 50px;
  background-color: ${props => props.theme.main};
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #8c8f94;
  text-transform: uppercase;
  font-weight: 700;
  margin: 40px 0;
  letter-spacing: 0.3px;
`;

const PhotosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 130px;
  height: 760px;
  @media (max-width: 1270px) {
    height: 550px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 50px;
    & img:nth-child(-n + 2) {
      display: none;
    }
  }
`;

const Phone = styled.img`
  width: auto;
  height: 100%;
  margin: 0 15px;
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.75));
  @media (max-width: 650px) {
    height: 550px;
    margin: 0 0 15px 0;
  }
`;

const Photo = styled.img`
  height: 92%;
  margin: 0 15px 35px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 650px) {
    height: 500px;
    margin: 0 0 15px;
  }
`;

export const Screens = (props: any) => (
  <Container {...props}>
    <Title>Intuitive Interface</Title>
    <StylishLine />
    <Subtitle>Clean and easy to use</Subtitle>
    <PhotosContainer>
      <Photo src={screen} />
      <Photo src={screen} />
      <Phone src={phone} />
      <Photo src={screen} />
      <Photo src={screen} />
    </PhotosContainer>
  </Container>
);

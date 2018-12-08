import * as React from "react";
import styled from "styled-components";
import { GoogleButtonContainer } from "./GoogleButtonContainer";

const Container = styled.section`
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(max-width:650px) {
    height: 450px;
  }
`;

const Title = styled.h3`
  font-family: ${props => props.theme.titleFamilyFont};
  font-size: 42px;
  font-weight: 300;
  text-align: center;
  margin: 0 10px 50px;
`;

const StylishLine = styled.div`
  height: 2px;
  width: 50px;
  background-color: ${props => props.theme.main};
  margin-bottom: 50px;
`;

const Note = styled.div`
  font-size: 14px;
  color: #8c8f94;
  width: 300px;
  text-align: center;
  letter-spacing: 0.3px;
  margin-top: 10px;
`;

export const CallToAction = (props: any) => (
  <Container {...props}>
    <Title>Start using it now</Title>
    <StylishLine />
    <GoogleButtonContainer />
    <Note>* For the MVC's sake, auth is only done through Google</Note>
  </Container>
);

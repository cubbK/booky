import * as React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import magnet from "./features/magnet.svg";
import icecream from "./features/icecream.svg";
import plane from "./features/plane.svg";
import github from "./features/github.svg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-family: ${props => props.theme.titleFamilyFont};
  font-size: 42px;
  font-weight: 300;
  margin: 50px 0 50px;
  @media(max-width: 480px) {
    margin: 50px 0 20px;
  }
`;

const StylishLine = styled.div`
  height: 2px;
  width: 50px;
  background-color: ${props => props.theme.main};
  margin-bottom: 100px;
  @media(max-width: 1000px) {
    margin-bottom: 50px;
  }
  @media(max-width: 480px) {
    margin-bottom: 30px;
  }
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Feature = styled.div`
  width: 400px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  @media(max-width: 1000px) {
    max-width: 600px;
    width: auto;
    margin-bottom: 70px;
    min-height: auto;
  }
`;

const FeatureImage = styled.img`
  width: 70px;
  @media(max-width: 480px) {
    width: 55px;
  }
`;

const FeatureTitle = styled.div`
  font-size: 26px;
  font-weight: 300;
  margin: 15px 0;
  @media(max-width: 480px) {
    font-size: 22px;
  }
`;

const FeatureDescripion = styled.div`
  font-size: 18px;
  color: #8c8f94;
  line-height: 1.7rem;
  @media(max-width: 480px) {
    font-size: 16px;
    line-height: 1.5rem;
  }
`;

export const Features = (props: any) => (
  <Layout {...props}>
    <Container>
      <Title>Features</Title>
      <StylishLine />
      <FeaturesGrid>
        <Feature>
          <FeatureImage src={magnet} />
          <FeatureTitle>Group by Domain</FeatureTitle>
          <FeatureDescripion>
            All new added bookmarks are grouped automatically by domain name. No
            need in any tedious manual sorting and grouping.
          </FeatureDescripion>
        </Feature>
        <Feature>
          <FeatureImage src={plane} />
          <FeatureTitle>Works Anywhere</FeatureTitle>
          <FeatureDescripion>
            The app is designed with every screen size in mind. It should work
            eamlessly on most of the devices: phones, desktops, fridges(?!).
            Actually it was not tested on fridges, you can try though :)
          </FeatureDescripion>
        </Feature>
        <Feature>
          <FeatureImage src={icecream} />
          <FeatureTitle>No Subscription</FeatureTitle>
          <FeatureDescripion>
            The app is free. There are no hidden fees and no payment is required
            to use it.
          </FeatureDescripion>
        </Feature>
        <Feature>
          <FeatureImage src={github} />
          <FeatureTitle>Open Source</FeatureTitle>
          <FeatureDescripion>
            All the code is stored on Github and you are free to use it however
            you want.
          </FeatureDescripion>
        </Feature>
      </FeaturesGrid>
    </Container>
  </Layout>
);

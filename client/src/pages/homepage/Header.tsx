import * as React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { Link } from "@reach/router";
import logo from "../../shared/logo.png";
import mountains from "./mountains-header.png";
import phoneTop from "./phoneTop.png";
import { GoogleButtonContainer } from "./GoogleButtonContainer";

const Nav = styled.nav`
  min-height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 450px) {
    min-height: 80px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.titleFamilyFont};
  font-weight: 300;
  font-size: 62px;
  margin: 120px 0 20px;
  text-align: center;
  @media (max-width: 450px) {
    margin: 40px 0 20px;
  }
`;

const Subtitle = styled.h2`
  font-size: 20px;
  color: #8c8f94;
  font-weight: 300;
  text-align: center;
  margin: 0 auto;
`;

const PhotoContainer = styled.div`
  background-image: url(${mountains});
  padding-top: 65px;
  background-size: cover;
  background-position: center top;
`;

const LayoutCentered = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PhoneContainer = styled.div`
  width: 360px;
  margin-top: 50px;
  @media(max-width: 450px) {
    width: 280px;
  }
`;

const PhoneImage = styled.img`
  width: 100%;
  height: 100%;
`;

export class Header extends React.Component {
  render() {
    return (
      <header>
        <Layout>
          <Title>Booky</Title>
          <Subtitle>The place to store your bookmarks</Subtitle>
        </Layout>
        <PhotoContainer>
          <LayoutCentered>
            <GoogleButtonContainer />
            <PhoneContainer>
              <PhoneImage src={phoneTop} alt="App Showcase" />
            </PhoneContainer>
          </LayoutCentered>
        </PhotoContainer>
      </header>
    );
  }
}

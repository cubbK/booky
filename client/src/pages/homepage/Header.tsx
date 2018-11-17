import * as React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { Link } from "@reach/router";
import logo from "./logo.svg";
import mountains from "./mountains-header.png";
import phoneTop from "./phoneTop.png";
import { GoogleButton } from "../../components/GoogleButton";

const Nav = styled.nav`
  min-height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin: 65px 0 20px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  color: #8c8f94;
  font-weight: 300;
  width: 780px;
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

const PhoneImage = styled.img`
  margin-top: 50px;
`;

export class Header extends React.Component {
  render() {
    return (
      <header>
        <Layout>
          <Nav>
            <Link to="/">
              <LogoContainer>
                <img src={logo} alt="Booky" />
              </LogoContainer>
            </Link>

            <div>Sign In</div>
          </Nav>
          <Title>Bookmarks</Title>
          <Subtitle>The place to store them</Subtitle>
        </Layout>
        <PhotoContainer>
          <LayoutCentered>
            <GoogleButton />
            <PhoneImage src={phoneTop} alt="App Showcase" />
          </LayoutCentered>
        </PhotoContainer>
      </header>
    );
  }
}

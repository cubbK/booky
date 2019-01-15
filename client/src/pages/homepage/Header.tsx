import * as React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { Link } from "@reach/router";
import logo from "../../shared/logo.png";
import mountains from "./header/mountains-header.png";
import phoneSliced from "./header/phoneSliced.png";
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
  padding: 120px 0 20px;
  margin: 0;
  text-align: center;
  @media (max-width: 450px) {
    padding: 40px 0 20px;
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
  position: relative;
  width: 360px;
  margin-top: 50px;
  margin-bottom: -3px;
  @media (max-width: 450px) {
    width: 280px;
  }
`;

const PhoneImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  position: absolute;
  display: block;
  max-width: 100%;
  top: 54px;
  left: 8px;
  width: 344px;
  @media (max-width: 450px) {
    top: 42px;
    left: 6px;
    width: 268px;
  }
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
              <PhoneImage src={phoneSliced} />
              <Video
                autoPlay={true}
                loop={true}
                muted={true}
                poster={process.env.PUBLIC_URL + "/video/video-placeholder.png"}
              >
                <source
                  src={process.env.PUBLIC_URL + "/video/video.mp4"}
                  type="video/mp4"
                />
                <source
                  src={process.env.PUBLIC_URL + "/video/video.webm"}
                  type="video/webm"
                />
              </Video>
            </PhoneContainer>
          </LayoutCentered>
        </PhotoContainer>
      </header>
    );
  }
}

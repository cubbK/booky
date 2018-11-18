import * as React from "react";
import styled from "styled-components";
import { Layout } from "./Layout";
import githubLogo from "./footer/mark-github.svg";

const Container = styled.footer`
  border-top: 2px solid #f4f4f4;
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 650px) {
    min-height: 60px;
  }
  @media(max-width: 500px) {
    flex-direction: column;
    justify-content: space-around;
    &>* {
      margin: 10px 0;
    }
  }
`;

const MadeBy = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-size: 14px;
  color: #26272d;
  font-family: ${props => props.theme.titleFamilyFont};
`;

const CheckIt = styled.div`
  font-size: 16px;
  color: #26272d;
  font-family: ${props => props.theme.titleFamilyFont};
  letter-spacing: 0.4px;
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  color: #222;
  img {
    margin-left: 5px;
  }
`;

export const Footer = (props: any) => (
  <footer {...props}>
    <Layout>
      <Container>
        <CheckIt>
          Check the project on{" "}
          <Link href="https://github.com/cubbK/booky">
            Github
            <img src={githubLogo} alt="Github" />
          </Link>
        </CheckIt>
        <MadeBy>Made by Dan</MadeBy>
      </Container>
    </Layout>
  </footer>
);

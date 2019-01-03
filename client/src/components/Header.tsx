import * as React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import logo from "../shared/logo.png";
import LoadingBar from "react-redux-loading-bar";

const Container = styled.header`
  width: 95%;
  margin: 0 auto;
  min-height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 650px) {
    min-height: 60px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: space-around;
    & > * {
      margin: 10px 0;
    }
  }
`;

const Logo = styled.img`
  margin-top: 5px;
`;

export class Header extends React.Component {
  render() {
    return (
      <Container>
        <LoadingBar />
        <Link to="/">
          <Logo src={logo} alt="Booky" />
        </Link>
        {this.props.children}
      </Container>
    );
  }
}

import * as React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Container = styled.header`
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

const Logo = styled.div``;

export class Header extends React.Component {
  render() {
    return (
      <Container>
        <Link to="/">
          <Logo>Logo</Logo>
        </Link>
        {this.props.children}
      </Container>
    );
  }
}

import * as React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import logo from "../shared/LogoNew.png";

const FullWidthContainer = styled.div`
  background-color: #222;
`;

const Container = styled.header`
  width: 95%;
  margin: 0 auto;
  min-height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const Logo = styled.img`
  margin-top: 5px;
`;

export class Header extends React.Component {
  render() {
    return (
      <FullWidthContainer>
        <Container>
          <Link to="/">
            <Logo src={logo} alt="Booky" />
          </Link>
          {this.props.children}
        </Container>
      </FullWidthContainer>
    );
  }
}

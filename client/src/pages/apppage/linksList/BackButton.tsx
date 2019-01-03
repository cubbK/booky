import * as React from "react";
import { Link } from "@reach/router";
import { Fab } from "@material-ui/core";
import backIcon from "./images/iconmonstr-arrow-72.svg";
import { Layout } from "../../../components/Layout";
import styled from "styled-components";

const ButtonStyled = styled(Fab)`
  && {
    margin: 10px 0;
  }
`;

const BackIcon = styled.img`
  mask: url(${backIcon}) no-repeat center;
  background-color: #fff;
  width: 40px;
  height: 40px;
  background-color: #000;
  background-size: cover;
  margin: 10px 0;
  :hover, :active, :focus {
    
  }
`;

export const BackButton = (props: any) => (
  <Layout>
    <Link to="/" replace={true}>
      <BackIcon src={backIcon} alt="Back" />
    </Link>
  </Layout>
);

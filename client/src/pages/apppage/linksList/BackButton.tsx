import * as React from "react";
import { Link } from "@reach/router";
import { Fab } from "@material-ui/core";
import backIcon from "./images/iconmonstr-arrow-72.svg";
import styled from "styled-components";

const BackLink = styled(Link)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  img {
    mask: url(${backIcon}) no-repeat center;
    background-color: #fff;
    width: 40px;
    height: 40px;
    background-color: #000;
    background-size: cover;
    display: block;
    :hover,
    :active,
    :focus {
    }
  }
`;

export const BackButton = (props: any) => (
  <BackLink to="/" replace={true} {...props}>
    <img alt="Back" />
  </BackLink>
);

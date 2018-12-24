import * as React from "react";
import { Link } from "@reach/router";
import { Fab } from "@material-ui/core";
import backIcon from "./iconmonstr-arrow-72.svg";
import { Layout } from "../../../components/Layout";
import styled from "styled-components";

const ButtonStyled = styled(Fab)`
  && {
    margin: 10px 0;
  }
`;

const ImgWhite = styled.img`
  filter: invert(100%) sepia(0%) saturate(1138%) hue-rotate(293deg)
    brightness(120%) contrast(100%);
`;

export const BackButton = (props: any) => (
  <Layout>
    <Link to="/" replace={true}>
      <ButtonStyled color="primary" aria-label="Back" {...props}>
        <ImgWhite src={backIcon} alt="Back" />
      </ButtonStyled>
    </Link>
  </Layout>
);

import * as React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

const BackLink = styled(Link)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :hover,
    :active,
    :focus {
      & > * {
        color: ${props => props.theme.primary};
      }
    }
  }
`;

const BackIcon = styled(FaArrowLeft)`
  width: 30px;
  height: 30px;
  color: rgba(0, 0, 0, 0.87);
`;

export const BackButton = (props: any) => (
  <BackLink to="/" replace={true} {...props}>
    <BackIcon />
  </BackLink>
);

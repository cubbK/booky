import * as React from "react";
import { FormField } from "./form/FormField";
import { FormButton } from "./form/FormButton";
import styled from "styled-components";
import { FormError } from "./form/FormError";
import { FormErrorContainer } from "./form/FormErrorContainer";
import { Paper } from "@material-ui/core";

const ContainerForm = styled.form`
  && {
    display: flex;
    align-items: center;
    width: 920px;
    margin: 0 auto;
    min-height: 100%;
    @media (max-width: 1200px) {
      width: 90%;
    }
  }
`;

const FormFieldStyled = styled(FormField)`
  && {
    flex-grow: 1;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`;

const FormButtonStyled = styled(FormButton)`
  && {
    height: 56px;
    margin-top: 7px;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`;

interface Props {
  onSubmit: () => void;
}

export class Form extends React.Component<Props> {
  static Error = FormError;
  static ErrorContainer = FormErrorContainer;
  static Field = FormFieldStyled;
  static Button = FormButtonStyled;

  render() {
    return <ContainerForm {...this.props}>{this.props.children}</ContainerForm>;
  }
}

import * as React from "react";
import { FormField } from "./form/FormField";
import { FormButton } from "./form/FormButton";
import styled from "styled-components";
import { FormError } from "./form/FormError";
import { FormErrorContainer } from "./form/FormErrorContainer";

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
  }
`;

const FormButtonStyled = styled(FormButton)`
  && {
    height: 55px;
    margin-top: 7px;
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

import * as React from "react";
import { Paper, ListItem } from "@material-ui/core";
import styled from "styled-components";


interface Props {
  [type: string]: any;
}

const PaperFixedWidth = styled(Paper)`
  && {
    width: 920px;
    margin: 0 auto;
    min-height: 100%;
    @media (max-width: 1200px) {
      width: 90%;
    }
  }
` as any;

export class List extends React.Component {
  static Item = ListItem;

  render() {
    return (
      <PaperFixedWidth {...this.props}>{this.props.children}</PaperFixedWidth>
    );
  }
}

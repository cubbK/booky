import * as React from "react";
import { Paper, List as MaterialList } from "@material-ui/core";
import styled from "styled-components";
import { ListItem } from "./list/ListItem";
import { ListLoading } from "./list/ListLoading";

interface Props {
  [type: string]: any;
}

const PaperFixedWidth = styled(Paper)`
  && {
    max-width: 100vw;
    width: 920px;
    margin: 0 auto;
    min-height: 100%;
    @media (max-width: 1200px) {
      width: 90%;
    }
    a {
      text-decoration: none;
      color: #222;
    }
  }
` as any;

export class List extends React.Component {
  static Item = ListItem;
  static Loading = ListLoading;

  render() {
    return (
      <PaperFixedWidth {...this.props} elevation={8}>
        {this.props.children}
      </PaperFixedWidth>
    );
  }
}

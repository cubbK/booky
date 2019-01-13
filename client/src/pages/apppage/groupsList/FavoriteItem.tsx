import * as React from "react";
import { Link } from "@reach/router";
import { List } from "../../../components/List";
import { GroupName } from "./GroupName";
import { NumberIndicator } from "./NumberIndicator";
import starIcon from "./images/iconmonstr-star-3.svg";
import styled from "styled-components";

const Star = styled.img`
  mask: url(${starIcon}) no-repeat center;
  mask-size: contain;
  width: 20px;
  height: 20px;
  background-color: #FCC221;
  margin-left: 5px;
`;

const GroupNameCentered = styled(GroupName)`
  display: flex;
  align-items: center;
`;

export const FavoriteItem = (props: { count: number }) => (
  <Link to={`/favorites`} key={-1}>
    <List.Item button={true}>
      <GroupNameCentered>
        Favorites <Star />
      </GroupNameCentered>
      <NumberIndicator>{props.count}</NumberIndicator>
    </List.Item>
  </Link>
);

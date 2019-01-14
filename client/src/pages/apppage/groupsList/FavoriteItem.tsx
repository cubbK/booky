import * as React from "react";
import { Link } from "@reach/router";
import { List } from "../../../components/List";
import { GroupName } from "./GroupName";
import { NumberIndicator } from "./NumberIndicator";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const Star = styled(FaStar)`
  width: 20px;
  height: 20px;
  color: #FCC221;
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

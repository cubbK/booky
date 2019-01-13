import {
  FETCH_GROUPS,
  PENDING,
  FULFILLED,
  REJECTED,
  ADD_LINK
} from "../actionTypes";
import produce from "immer";

export interface Group {
  id: number;
  name: string;
  linksCount: number;
}

export interface Groups {
  data: Array<Group>;
  loading: boolean;
  error: any;
}

const defaultState: Groups = {
  data: [],
  loading: false,
  error: null
};

export function groupsReducer(state = defaultState, action: any) {
  switch (action.type) {
    case FETCH_GROUPS + PENDING:
      return produce(state, draftState => {
        draftState.loading = true;
        draftState.error = null;
      });
    case FETCH_GROUPS + FULFILLED:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.data = action.payload.data;
        draftState.error = null;
      });
    case FETCH_GROUPS + REJECTED:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = action.payload;
      });
    case ADD_LINK:
      console.log(action.payload);
      return produce(state, draftState => {
        let encounteredGroup = false;
        for (const [index, group] of draftState.data.entries()) {
          if (group.name === action.payload.group) {
            draftState.data[index].linksCount =
              draftState.data[index].linksCount + 1;
            encounteredGroup = true;
          }
        }
        //if not group present with this
        // name create a new one and set id = -1 to not conflict with other groups
        if (!encounteredGroup) {
          draftState.data.push({
            id: -1,
            name: action.payload.group,
            linksCount: 1
          });
        }
      });
    default:
      return state;
  }
}

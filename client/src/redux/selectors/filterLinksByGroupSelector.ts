import { createSelector } from 'reselect'
import { CombinedReducers } from '../reducers';
import produce from 'immer';

const getLinks = (state: CombinedReducers) => state.links

export const filterLinksByGroupSelector =( state: CombinedReducers, group: string ) => createSelector(
  [ getLinks ],
  (links) => links
)


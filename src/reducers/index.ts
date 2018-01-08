import { combineReducers } from 'redux';
import { MemberEntity } from '../models';
import { membersReducer } from './members';

export interface State {
  members: MemberEntity[];
  member: MemberEntity;
}

export const state = combineReducers<State>({
  members: membersReducer,
});

import { actionTypes } from '../common/constants/actionTypes';
import { MemberEntity } from '../models';

export const membersReducer = (state: MemberEntity[] = [], action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_MEMBERS_COMPLETED:
      return handleFetchMembersCompleted(state, action.payload);
    default:
      return state;
  }
};

const handleFetchMembersCompleted = (state: MemberEntity[], payload: MemberEntity[]) => {
  return payload;
};
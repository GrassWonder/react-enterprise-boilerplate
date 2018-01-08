import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../models';
import { memberAPI } from '../../../api/member';

export const fetchMembersAction = () => (dispatch: any) => {
  memberAPI.fetchMembers()
    .then((members) => {
    dispatch(fetchMembersCompleted(members));
  });
};

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: actionTypes.FETCH_MEMBERS_COMPLETED,
  payload: members,
});

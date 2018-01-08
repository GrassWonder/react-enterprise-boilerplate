// import { Reducer } from 'redux';
//
// import * as constants from '../actions/github';
// import { SetMembersAction } from '../actions/github';
// import Member from '../models/Member';
//
// interface GithubState {
//   members: Member[];
// }
//
// const initialState: GithubState = {
//   members: []
// };
//
// export const githubReducer: Reducer<GithubState> = (
//   state: GithubState = initialState,
//   action: SetMembersAction,
// ) => {
//   switch (action.type) {
//   case constants.SET_MEMBERS:
//     return {
//       members: action.members,
//     };
//   default:
//     return state;
//   }
// };

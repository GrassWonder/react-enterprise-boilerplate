// import { Action } from 'redux';
//
// import Member from '../models/Member';
//
// export const SET_MEMBERS = 'SET_MEMBERS';
// export interface SetMembersAction extends Action {
//   members: Member[];
// }

// import axios from 'axios';
// import { call, put } from 'redux-saga/effects';
// import API_END_POINT from '../../config/index';
//
// const getMembers = () => {
//   return axios.get(API_END_POINT);
// };
//
// function *fetchMembers () {
//   try {
//     const response = yield call(getMembers);
//     yield put({type: 'RECEIVE_MEMBERS', payload: response.data});
//   } catch (e) {
//     // TODO
//   }
//
// }
//
// export {
//   fetchMembers
// };

import { MemberEntity } from '../../models';
import { members } from './mockData';

const fetchMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(members);
};

export const memberAPI = {
  fetchMembers,
};

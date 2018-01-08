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

const baseURL = 'https://api.github.com/orgs/globis-org';

const fetchMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(members);
};

const mapToMember = (githubMember: any): MemberEntity => {
  return {
    id: githubMember.id,
    login: githubMember.login,
    avatar_url: githubMember.avatar_url,
  };
};

const mapToMembers = (githubMembers: any[]): MemberEntity[] => {
  return githubMembers.map(mapToMember);
};

const fetchMembersAsync = (): Promise<MemberEntity[]> => {
  const membersURL = `${baseURL}/members`;
  return fetch(membersURL)
    .then((response) => (response.json()))
    .then(mapToMembers);
};

export const memberAPI = {
  fetchMembers,
  fetchMembersAsync,
};

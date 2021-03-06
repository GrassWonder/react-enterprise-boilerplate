import { ThunkAction } from 'redux-thunk';

import * as constants from '../constants/github';
import Member from '../models/Member';
import User from '../models/User';
import GitHubApi from '../services/github/api';
import { AbstractAction } from './';

export interface GitHubAction extends AbstractAction {
  payload: {
    members: Member[],
  };
}

// Set Members
export const setMembers = (members: Member[]) => ({
  type: constants.SET_MEMBERS,
  payload: { members },
});

// Get Organization Members
export const getOrgMembers = (): ThunkAction<void, {}, {}> =>
async (dispatch) => {
  let members: Member[] = [];

  try {
    const api = new GitHubApi();
    const response = await api.getOrgMembers('globis-org');
    members = response.data;
  } catch (err) {
    console.log(err.message);
  }

  dispatch(setMembers(members));
};

// Search Users
export const searchUsers = (): ThunkAction<void, {}, {}> =>
async (dispatch) => {
  let users: User[] = [];

  try {
    const api = new GitHubApi();
    const response = await api.searchUsers('yuka');
    users = response.data;
  } catch (err) {
    console.log(err.message);
  }

  dispatch(setMembers(users));
};

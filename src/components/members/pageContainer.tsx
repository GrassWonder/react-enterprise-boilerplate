// import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchMembersAction } from './actions/fetchMembers';
import { MembersPage } from './page';

const mapStateToProps = (state: State) => ({
  members: state.members,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchMembers: () => dispatch(fetchMembersAction()),
});

export const MembersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MembersPage);

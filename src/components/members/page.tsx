import * as React from 'react';
import { memberAPI } from '../../api/member';
import { MemberEntity } from '../../models';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

interface MembersPageProps {
}
interface MembersPageState {
  members: MemberEntity[];
}
export class MembersPage extends React.Component<MembersPageProps, MembersPageState> {
  constructor(props: MembersPageProps) {
    super(props);
    this.state = { members: [] };
  }

  public componentDidMount() {
    // memberAPI.fetchMembers()
    memberAPI.fetchMembersAsync()
      .then((members) => {
          this.setState({ members });
        });
  }

  public render() {
    return (
      <div className="row">
        <h2> Members Page</h2>
        <table className="table">
          <thead>
          <MemberHeader />
        </thead>
          <tbody>
          {
            this.state.members.map((member) =>
              <MemberRow
                key={member.id}
                member={member}
              />
            )
          }
        </tbody>
        </table>
      </div>
      );
  }
}

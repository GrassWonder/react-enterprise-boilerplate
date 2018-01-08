import * as React from 'react';
import { MemberEntity } from '../../models';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

interface MembersPageProps {
  members: MemberEntity[];
  fetchMembers(): void;
}

export class MembersPage extends React.Component<MembersPageProps, {}> {

  public componentDidMount() {
    this.props.fetchMembers();
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
            this.props.members.map((member) =>
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

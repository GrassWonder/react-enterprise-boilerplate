import * as React from 'react';
import { MemberEntity } from '../../models';

interface MemberRowProps {
  member: MemberEntity;
}

export const MemberRow: React.SFC<MemberRowProps> = ({member}) => {
  return (
    <tr>
      <td>
        <img src={member.avatar_url} className="avatar" />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  );
};

import React from 'react';
import { Group } from '../../types';

type GroupListProps = {
  activeId: string;
  groups: Group[];
  onGroupClick?: (groupId: Group['id']) => void;
};

export const GroupList = ({ groups, activeId, onGroupClick }: GroupListProps) => (
  <ul>
    {groups.map(({ id, title, questionsCount }) => (
      <li
        key={id}
        onClick={() => onGroupClick?.(id)}
        style={{
          cursor: 'pointer',
          fontWeight: id === activeId ? 'bold' : 'normal',
          color: id === activeId ? '#fff' : 'inherit',
        }}
      >
        {id}. {title} ({questionsCount})
      </li>
    ))}
  </ul>
);

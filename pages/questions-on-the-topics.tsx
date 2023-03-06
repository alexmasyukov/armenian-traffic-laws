import React, { useState } from 'react';
import Link from 'next/link';
import { getGroups } from '../utils';
import { Group } from '../types';
import { GroupList } from '../components/GroupList/GroupList';
import { Questions } from '../components/Questions/Questions';

const groups = getGroups();

export default function FirstPost() {
  const [group, selectedGroup] = useState<Group>(groups[0]);

  const handleSelectGroup = (groupId: Group['id']) => {
    selectedGroup(groups.find((group) => group.id === groupId) as Group);
  };

  return (
    <div>
      <Link href='/'>Back to home</Link>

      <h2>Темы:</h2>
      <GroupList groups={groups} activeId={group.id} onGroupClick={handleSelectGroup} />
      <h3>{group.title}</h3>
      <Questions questions={group.questions} groupId={group.id} questionsCount={group.questionsCount} />
    </div>
  );
}

import { groupsByTheme } from '../data/groupsByTheme';
import { questions } from '../data/questions';
import { Group, Groups } from '../types';

export const getGroups = (): Group[] => {
  const groupsDictionary = questions.reduce((acc, question) => {
    const group = String(question.group) as keyof typeof groupsByTheme;
    const title = groupsByTheme[group]?.title;

    return {
      ...acc,
      [group]: {
        id: group,
        title,
        questionsCount: (acc[group]?.questionsCount || 0) + 1,
        questions: [...(acc[group]?.questions || []), question],
      },
    };
  }, {} as Groups);

  const groups = Object.values(groupsDictionary).map((group) => ({
    ...group,
    questions: group.questions.sort((a, b) => a.id - b.id),
  })) as Group[];

  return groups;
};

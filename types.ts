import { questions } from './data/questions';

export type QuestionId = string;

export type Answers = Record<string, string>;
export type AnswerKey = keyof Answers;

export type QuestionMetric = {
  correctAnswers: number;
  incorrectAnswers: number;
};

export type Question = typeof questions[number];

export type Group = {
  id: string;
  title: string;
  questionsCount: number;
  questions: Question[];
};

export type Groups = Record<Group['id'], Group>;

export type Favorites = QuestionId[];

export type AppSettings = {
  lang: 'ru' | 'am';
  theme: 'light' | 'dark';
  fontSize: {
    base: string;
    rules: string;
  };
};

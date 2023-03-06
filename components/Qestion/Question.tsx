import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import Image from 'next/image';
import { Answer } from '../Answer/Answer';
import { AnswerKey, Answers, QuestionId } from '../../types';

export interface IQestionProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  image?: string;
  correctAnswer: AnswerKey;
  children?: React.ReactNode;
  answers: Answers;
  onSelectAnswer?: (answer: { questionId: QuestionId; isCurrect: boolean }) => void;
}

export const Qestion: FC<IQestionProps> = ({
  className,
  children,
  id = '',
  image = '',
  answers = {},
  correctAnswer = '',
  onSelectAnswer,
  ...props
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [image, id]);

  const hanldeAnswerClick = (answerKey: AnswerKey) => () => {
    setSelectedAnswer(answerKey);
    onSelectAnswer?.({
      questionId: id,
      isCurrect: correctAnswer === answerKey,
    });
  };

  const handleShowCorrectAnswer = () => {
    setSelectedAnswer(correctAnswer);
  };

  const answersComponents = Object.entries(answers)
    .filter(([_, answerText]) => answerText !== '')
    .map(([answerKey, answerText]) => {
      const isCorrect = correctAnswer === answerKey;
      const currentIsSelected = selectedAnswer === answerKey;
      const someAnswerIsSelected = !!selectedAnswer;
      const noAnswerSelected = selectedAnswer === null;
      const showWorngAnswerIfIsSelected = someAnswerIsSelected && currentIsSelected && !isCorrect;
      const showCorrectAnswer = someAnswerIsSelected && isCorrect;

      return (
        <Answer
          key={answerKey}
          onClick={noAnswerSelected ? hanldeAnswerClick(answerKey) : undefined}
          showAnswer={showWorngAnswerIfIsSelected || showCorrectAnswer}
          isCurrect={isCorrect}
        >
          {answerText}
        </Answer>
      );
    });

  return (
    <div {...props}>
      <div
        style={{
          position: 'relative',
          height: 350,
          width: 'auto',
        }}
      >
        <Image
          src={`/assets/images/pddticket/big/${image}`}
          alt='Your Name'
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>

      <h3>{children}</h3>
      <div>{answersComponents}</div>

      {!selectedAnswer && <button onClick={handleShowCorrectAnswer}>Показать правильный ответ</button>}
    </div>
  );
};

import React from 'react';
import { useState, useEffect } from 'react';
import { FavoritesStore } from '../../helpers/FavoritesStore';
import { MetricsStore } from '../../helpers/MetricsStore';
import { AnswerKey, Group, QuestionId, QuestionMetric } from '../../types';
import { Qestion } from '../Qestion/Question';

type QuestionsProps = {
  groupId: Group['id'];
  questions: Group['questions'];
  questionsCount: number;
};

export const Questions = ({ groupId = '0', questions = [], questionsCount = 0 }: QuestionsProps) => {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const { id, answer_a, answer_b, answer_c, answer_d, answer_e, correct_answer, question, image } =
    questions[currentQuestionIndex];
  const questionId = `${id}`;
  const [answerMetric, setAnswerMetric] = useState<QuestionMetric>({
    correctAnswers: 0,
    incorrectAnswers: 0,
  });
  const [hasInFavorites, setHasInFavorites] = useState<boolean>(false);
  const correctAnswer = correct_answer as AnswerKey;
  const questionNumber = currentQuestionIndex + 1;

  useEffect(() => {
    setAnswerMetric(MetricsStore.getByQuestionId(questionId));
    setHasInFavorites(FavoritesStore.hasQuestionIdInFavorites(questionId));
  }, []);

  useEffect(() => {
    setAnswerMetric(MetricsStore.getByQuestionId(questionId));
    setHasInFavorites(FavoritesStore.hasQuestionIdInFavorites(questionId));
  }, [questionId]);

  useEffect(() => {
    setcurrentQuestionIndex(0);
  }, [groupId]);

  const hanleNextClick = () => {
    setcurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const hanlePrevClick = () => {
    setcurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSelectAnswer = (answer: { questionId: QuestionId; isCurrect: boolean }) => {
    if (answer.isCurrect) {
      MetricsStore.increaseCorrectAnswersByQuestionId(answer.questionId);
    } else {
      MetricsStore.increaseIncorrectAnswersByQuestionId(answer.questionId);
    }

    setAnswerMetric(MetricsStore.getByQuestionId(questionId));
  };

  const handleFavoriteClick = () => {
    if (hasInFavorites) {
      FavoritesStore.removeQuestionIdFromFavorites(questionId);
      setHasInFavorites(false);
    } else {
      FavoritesStore.addQuestionIdToFavorites(questionId);
      setHasInFavorites(true);
    }
  };

  return (
    <>
      <p>
        №{questionNumber} из {questionsCount}
        {'   '}
        <button onClick={handleFavoriteClick}>
          {hasInFavorites ? 'В избранном' : 'Добавить в избранное'}
        </button>
      </p>
      <Qestion
        id={questionId}
        image={image}
        answers={{
          answer_a,
          answer_b,
          answer_c,
          answer_d,
          answer_e,
        }}
        correctAnswer={correctAnswer}
        onSelectAnswer={handleSelectAnswer}
      >
        {questionNumber}. {question}
      </Qestion>

      <div
        style={{
          marginTop: 20,
        }}
      >
        {answerMetric.incorrectAnswers > 0 && (
          <p style={{ color: 'red' }}> Отвечено не верно: {answerMetric.incorrectAnswers}</p>
        )}
        {answerMetric.correctAnswers > 0 && (
          <p style={{ color: 'green' }}> Отвечено верно: {answerMetric.correctAnswers}</p>
        )}

        <button disabled={currentQuestionIndex === 0} onClick={hanlePrevClick}>
          Назад
        </button>
        {' '}
        <button disabled={currentQuestionIndex === questions.length - 1} onClick={hanleNextClick}>
          Далее
        </button>
      </div>
    </>
  );
};

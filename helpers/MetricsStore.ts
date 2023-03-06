import { QuestionMetric, QuestionId } from '../types';

export class MetricsStore {
  // This is a key for the local storage for the questions.
  private static questionsMetricsKey = 'questionsMetrics';
  private static initialQuestions = {};
  private static initialQuestionMetric: QuestionMetric = {
    correctAnswers: 0,
    incorrectAnswers: 0,
  };

  /**
   * Gets the questions from local storage.
   */
  private static getQuestions = () => {
    try {
      const questions = JSON.parse(localStorage?.getItem(MetricsStore.questionsMetricsKey) ?? '{}') as Record<
        QuestionId,
        QuestionMetric
      >;

      return questions;
    } catch (_) {
      return MetricsStore.initialQuestions;
    }
  };

  /**
   * Updates the question metric for a given question id.
   * @param questionId
   * @param field
   */
  private static updateQuestionMetric(questionId: QuestionId, field: keyof QuestionMetric) {
    let questions = MetricsStore.getQuestions();

    if (questions === null) {
      questions = {};
    }

    const prev = questions?.[questionId];
    questions[questionId] = {
      ...prev,
      [field]: (prev?.[field] || 0) + 1,
    };

    localStorage?.setItem(MetricsStore.questionsMetricsKey, JSON.stringify(questions));
  }

  /**
   * Gets the question metric for a given question id.
   * @param questionId
   * @returns
   */
  static getByQuestionId(questionId: QuestionId): QuestionMetric {
    const questions = MetricsStore.getQuestions();

    return questions?.[questionId] ?? MetricsStore.initialQuestionMetric;
  }

  /**
   * Increases the incorrect answers for a given question id.
   * @param questionId
   */
  static increaseIncorrectAnswersByQuestionId(questionId: QuestionId): void {
    MetricsStore.updateQuestionMetric(questionId, 'incorrectAnswers');
  }

  /**
   * Increases the correct answers for a given question id.
   * @param questionId
   */
  static increaseCorrectAnswersByQuestionId(questionId: QuestionId): void {
    MetricsStore.updateQuestionMetric(questionId, 'correctAnswers');
  }
}

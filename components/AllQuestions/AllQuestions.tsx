import React from 'react';
import { Group } from '../../types';

type QuestionsProps = {
  groups: Group[];
};

export const AllQuestions = ({ groups }: QuestionsProps) => {
  return (
    <table>
      <tbody>
        {Object.entries(groups).map(([index, group]) => (
          <React.Fragment key={index}>
            <tr>
              <td>
                <h3>{group.title}</h3>
              </td>
              <td>{group.questionsCount}</td>
            </tr>

            {group.questions.map((question, i) => (
              <tr key={i}>
                <td colSpan={2}>
                  {'       '}
                  {question.question}
                  <br />
                  {question.answer_a} {question.correct_answer === 'answer_a' && '✅'}
                  <br />
                  {question.answer_b} {question.correct_answer === 'answer_b' && '✅'}
                  <br />
                  {question.answer_c} {question.correct_answer === 'answer_c' && '✅'}
                  <br />
                  {question.answer_d} {question.correct_answer === 'answer_d' && '✅'}
                  <br />
                  {question.answer_e} {question.correct_answer === 'answer_e' && '✅'}
                  <br />
                  <img
                    src={process.env.PUBLIC_URL + '/assets/images/pddticket/big/' + question.image}
                    alt=''
                  />
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}

        {/* {Object.entries(groups).map(([index, group]) => (
            <>
              {group.questions.map((question, i) => {
                if (question.image_original !== '') {
                  return (
                    <tr>
                      <td>
                        https://transinfo.am/img/pddticket/big/
                        {question.image_original}
                      </td>
                    </tr>
                  );
                } else {
                  return <></>;
                }
              })}
            </>
          ))} */}
      </tbody>
    </table>
  );
};

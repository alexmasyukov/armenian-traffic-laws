import React from 'react';

type AnswerProps = {
  showAnswer?: boolean;
  isCurrect: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Answer = ({ children, isCurrect, showAnswer = false, ...props }: AnswerProps) => (
  <div {...props}>
    {children}
    {showAnswer && isCurrect && <span> ✅</span>}
    {showAnswer && !isCurrect && <span> ❌</span>}
  </div>
);

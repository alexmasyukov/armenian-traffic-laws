import React from 'react';
import BaseLayout from '../BaseLayout/BaseLayout';
import { StyledRulesLayout } from './styled';

type Props = {
  children: React.ReactNode;
};

export default function RulesLayout({ children }: Props) {
  return (
    <BaseLayout>
      <StyledRulesLayout>{children}</StyledRulesLayout>
    </BaseLayout>
  );
}

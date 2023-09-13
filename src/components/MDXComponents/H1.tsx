import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function H1({ children }: Props) {
  return <h1 style={{ marginTop: '80px' }}>{children}</h1>;
}

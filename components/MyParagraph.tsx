import React from 'react';

export default function Button({ children }: { children: React.ReactNode }) {
  return <p style={{ color: 'red' }}>{children}</p>;
}

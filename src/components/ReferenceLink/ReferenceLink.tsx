import React from 'react';
import { useReference } from '../../context/ReferenceContext';

type Props = {
  from: string;
  to: string;
  children?: React.ReactNode;
};

export default function ReferenceLink({ from, to, children }: Props) {
  const { setReference } = useReference();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    setTimeout(() => {
      const targetElement = document.querySelector(`span[id="${to}"]`) as HTMLDivElement | null;

      console.log(targetElement);
      console.log(targetElement?.offsetTop);

      if (!targetElement || !targetElement?.offsetTop) return;

      window.scrollTo({
        top: targetElement.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }, 300);

    setReference({
      from,
      to,
    });
  };

  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      style={{
        color: '#f6ba98',
        textDecoration: 'underline',
        cursor: 'pointer',
      }}
    >
      {children ?? to}
    </a>
  );
}

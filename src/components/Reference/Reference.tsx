import React from 'react';
import { useReference } from '../../context/ReferenceContext';

type Props = {
  is: string;
};

export default function Reference({ is }: Props) {
  const {
    setReference,
    reference: { from, to },
  } = useReference();

  console.log('to-is', to, ' / ', is);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    setReference({
      from,
      to: '',
    });

    setTimeout(() => {
      const targetElement = document.querySelector(`span[id="${from}"]`) as HTMLDivElement | null;

      console.log(targetElement);
      console.log(targetElement?.offsetTop);

      if (!targetElement || !targetElement?.offsetTop) return;

      window.scrollTo({
        top: targetElement.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }, 300);
  };

  if (to === is) {
    return (
      <span
        id={is}
        style={{
          background: '#b9d7f1',
          color: '#000',
          padding: '3px',
        }}
      >
        <a
          onClick={handleClick}
          href={`#${from}`}
          style={{
            color: '#000',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Назад к ПДД-{from}
        </a>
      </span>
    );
  }

  if (from === is) {
    return (
      <span
        id={is}
        style={{
          background: '#b9d7f1',
          color: '#000',
          padding: '3px',
        }}
      >
        Здесь:
      </span>
    );
  }

  return <span id={is} />;
}

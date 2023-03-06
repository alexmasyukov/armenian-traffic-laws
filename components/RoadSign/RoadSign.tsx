import React, { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
  number: string;
};

export default function RoadSign({ children, number }: Props) {
  const [isRenderDOM, setIsRenderDOM] = React.useState(false);

  useEffect(() => {
    setIsRenderDOM(true);
  }, []);

  if (!isRenderDOM) return children;

  return (
    <a href={`#${number}`} style={{ color: '#337ab7', textDecoration: 'none' }}>
      <img
        src={`/assets/road-sign/${number}.png`}
        style={{ height: '32px', width: 'auto', position: 'relative', verticalAlign: 'middle' }}
        alt={`знак пдд ${number}`}
      />
      {' '}
      {children}
    </a>
  );
}

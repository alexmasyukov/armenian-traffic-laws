import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { Tooltip } from './styled';

type Props = {
  children: React.ReactNode;
  number: string;
};

export default function RoadSign({ children, number }: Props) {
  const [isRenderDOM, setIsRenderDOM] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    setIsRenderDOM(true);
  }, []);

  if (!isRenderDOM) return children;

  return (
    <>
      <a
        href={`#${number}`}
        style={{ color: '#337ab7', textDecoration: 'none' }}
        ref={setReferenceElement}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onTouchStart={() => setShow(true)}
        onTouchEnd={() => setShow(false)}
      >
        <img
          src={`/assets/road-sign/${number}.png`}
          style={{ height: '34px', width: 'auto', position: 'relative', verticalAlign: 'middle' }}
          alt={`знак пдд ${number}`}
        />
        {' '}
        {children}
      </a>

      {show &&
        ReactDOM.createPortal(
          <Tooltip ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            <img
              src={`/assets/road-sign/${number}.png`}
              style={{ height: '80px', width: 'auto', position: 'relative', verticalAlign: 'middle' }}
              alt={`знак пдд ${number}`}
            />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt natus ratione laudantium,
            accusamus quibusdam asperiores expedita iure. Blanditiis reiciendis temporibus qui fuga doloremque
            corrupti, eaque accusantium. Maxime, placeat est.
            {/* <div ref={setArrowElement} style={styles.arrow} /> */}
          </Tooltip>,
          document.body
        )}
    </>
  );
}

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { Arrow, Group, Sign, Tooltip } from './styled';
import { RoadSignGroup, roadSignGroups, roadSigns } from '../../data/roadSigns';

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
    strategy: 'fixed',
    modifiers: [
      { name: 'offset', options: { offset: [0, 14] } },
      { name: 'arrow', options: { element: arrowElement } },
    ],
  });
  const [show, setShow] = useState(false);
  const roadSignNumber = children as string;
  const roadSign = roadSigns.find((roadSign) => roadSign.number === roadSignNumber);
  let roadSignGroup: RoadSignGroup = null;

  if (roadSign) {
    roadSignGroup = roadSignGroups.find((roadSignGroup) => roadSignGroup.id === roadSign.groupId);
  }

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
          src={`/assets/road-signs/${number}.png`}
          style={{ height: '34px', width: 'auto', position: 'relative', verticalAlign: 'middle' }}
          alt={`знак пдд ${number}`}
        />
        {' '}
        {children}
      </a>

      {show &&
        ReactDOM.createPortal(
          <Tooltip ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            <Sign>
              <img
                src={`/assets/road-signs/${roadSignNumber}.png`}
                style={{ height: '80px', width: 'auto', position: 'relative', verticalAlign: 'middle' }}
                alt={`знак пдд ${roadSignNumber}`}
              />

              <div>
                <b>
                  {roadSign?.number}. {roadSign?.name}
                </b>

                <p>{roadSign?.description}</p>
              </div>
            </Sign>

            <Group>
              <b>{roadSignGroup?.name}</b>
              <p>{roadSignGroup?.description}</p>
            </Group>

            <Arrow ref={setArrowElement} style={styles.arrow} />
          </Tooltip>,
          document.body
        )}
    </>
  );
}

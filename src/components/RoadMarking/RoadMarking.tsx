import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { Arrow, Group, Img, ImgGroup, ImgWrapper, Sign, Tooltip } from './styled';
import { roadMarkings, roadMarkingsGroups } from '../../data/roadMarkings';
import { RoadElementGroup } from '../../types';

type Props = {
  children?: React.ReactNode;
  n: string;
  to?: string;
};

type NameProps = {
  children: React.ReactNode;
  name: string;
};

const Name = ({ children, name }: NameProps) => (
  <span>
    {/* style={{ color: '#bdddff' }} */}
    {children}
    {name && <> - &quot;{name}&quot;</>}
  </span>
);

export default function RoadMarking({ children, n: number, to: toNumber }: Props) {
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
  const signNumber = number as string;
  const roadMarking = roadMarkings.find((roadMarking) => roadMarking.num === signNumber);
  let roadMarkingGroup: RoadElementGroup = null;

  if (roadMarking) {
    roadMarkingGroup = roadMarkingsGroups.find(
      (roadMarkingGroup) => roadMarkingGroup.id === roadMarking.groupId
    );
  }

  useEffect(() => {
    setIsRenderDOM(true);
  }, []);

  if (!isRenderDOM) return <>{children}</>;

  const imageGroup = roadMarking?.elmGroup && (
    <ImgGroup>
      {roadMarking.elmGroup
        .filter((signNumberFromGroup) => signNumberFromGroup !== signNumber)
        .map((signNumber) => (
          <ImgWrapper key={signNumber}>
            <Img
              size='small'
              key={signNumber}
              src={`/assets/images/road-markings/${signNumber}.png`}
              alt={`знак пдд ${signNumber}`}
            />
            <p>{signNumber}</p>
          </ImgWrapper>
        ))}
    </ImgGroup>
  );

  return (
    <>
      <a
        href={`#${number}`}
        style={{ color: '#184770', textDecoration: 'none' }}
        ref={setReferenceElement}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onTouchStart={() => setShow(true)}
        onTouchEnd={() => setShow(false)}
      >
        <img
          src={`/assets/images/road-markings/${number}.png`}
          style={{
            height: '30px',
            width: 'auto',
            position: 'relative',
            verticalAlign: 'middle',
          }}
          alt={`знак пдд ${number}`}
        />{' '}
        <Name name={roadMarking?.name}>
          {number} {toNumber && `  – ${toNumber}`}
        </Name>
      </a>

      {show &&
        ReactDOM.createPortal(
          <Tooltip ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            <Sign>
              <Img src={`/assets/images/road-markings/${signNumber}.png`} alt={`знак пдд ${signNumber}`} />

              <div>
                <b>
                  {roadMarking?.num}. {roadMarking?.name}
                </b>

                <p>{roadMarking?.desc}</p>
              </div>
            </Sign>

            {imageGroup}

            <Group>
              <b>{roadMarkingGroup?.name}</b>
              <p>{roadMarkingGroup?.desc}</p>
            </Group>

            <Arrow ref={setArrowElement} style={styles.arrow} />
          </Tooltip>,

          document.body
        )}
    </>
  );
}

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { RoadSignGroup, roadSignGroups, roadSigns } from './../../data/roadSigns';
import { Arrow, Group, Img, ImgGroup, ImgWrapper, Sign, Tooltip } from './styled';

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
  <span style={{ color: '#bdddff' }}>
    {children} - &quot;{name}&quot;
  </span>
);

export default function RoadSign({ children, n: number, to: toNumber }: Props) {
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
  const roadSign = roadSigns.find((roadSign) => roadSign.number === signNumber);
  let roadSignGroup: RoadSignGroup = null;

  if (roadSign) {
    roadSignGroup = roadSignGroups.find((roadSignGroup) => roadSignGroup.id === roadSign.groupId);
  }

  useEffect(() => {
    setIsRenderDOM(true);
  }, []);

  if (!isRenderDOM) return <>{children}</>;

  const imageGroup = roadSign?.signsGroup && (
    <ImgGroup>
      {roadSign.signsGroup
        .filter((signNumberFromGroup) => signNumberFromGroup !== signNumber)
        .map((signNumber) => (
          <ImgWrapper key={signNumber}>
            <Img
              size='small'
              key={signNumber}
              src={`/assets/images/road-signs/${signNumber}.png`}
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
        style={{ color: '#337ab7', textDecoration: 'none' }}
        ref={setReferenceElement}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onTouchStart={() => setShow(true)}
        onTouchEnd={() => setShow(false)}
      >
        <img
          src={`/assets/images/road-signs/${number}.png`}
          style={{
            height: '30px',
            width: 'auto',
            position: 'relative',
            verticalAlign: 'middle',
          }}
          alt={`знак пдд ${number}`}
        />
        {' '}
        <Name name={roadSign?.name}>
          {number}
          {toNumber && `  – ${toNumber}`}
        </Name>
      </a>

      {show &&
        ReactDOM.createPortal(
          <Tooltip ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            <Sign>
              <Img src={`/assets/images/road-signs/${signNumber}.png`} alt={`знак пдд ${signNumber}`} />

              <div>
                <b>
                  {roadSign?.number}. {roadSign?.name}
                </b>

                <p>{roadSign?.description}</p>
              </div>
            </Sign>

            {imageGroup}

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

import React from 'react';
import { roadSignGroups, roadSigns } from '../../data/roadSigns';
import { RoadElement } from '../../types';

const getRoadSignsByGroup = (id: string) => {
  return roadSigns.filter((item) => item.groupId === id);
};

const getRoadSignsByElementGroup = (elmGroup: RoadElement['elmGroup']) => {
  return roadSigns.filter((item) => elmGroup.includes(item.num));
};

const filterDoubleElementGroup = (roadSigns: RoadElement[]) => {
  const usedRoadSigns: RoadElement['num'][] = [];
  const result: RoadElement[] = [];

  roadSigns.forEach((roadSign) => {
    if (roadSign.elmGroup && usedRoadSigns.includes(roadSign.num)) {
      return;
    }

    if (roadSign.elmGroup) {
      usedRoadSigns.push(...roadSign.elmGroup);
    }

    return result.push(roadSign);
  });

  return result;
};

type RoadSignBlockProps = RoadElement;

const RoadSignBlock = ({ num, name, desc, elmGroup }: RoadSignBlockProps) => {
  if (elmGroup) {
    const roadSignsByElementGroup = getRoadSignsByElementGroup(elmGroup);

    return (
      <React.Fragment key={num}>
        <div className='col-12'>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {roadSignsByElementGroup.map(({ num }) => (
              <div
                key={num}
                style={{
                  textAlign: 'center',
                }}
              >
                <img src={`/assets/images/road-signs/${num}.png`} alt={`знак пдд ${num}`} />
                <br />
                {num}
              </div>
            ))}
          </div>
        </div>
        <div className='col-12'>
          <b>
            {roadSignsByElementGroup.at(0)?.num}
            {' '}–{' '}
            {roadSignsByElementGroup.at(-1)?.num}
            {name && (
              <>
                {'  '}
                {name}
              </>
            )}
          </b>
          <p>{desc}</p>
        </div>
        <div className='col-12'>
          <hr />
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment key={num}>
      <div className='col-3 col-md-2 col-lg-1'>
        <img
          src={`/assets/images/road-signs/${num}.png`}
          alt={`знак пдд ${num}`}
          style={{
            width: '100%',
          }}
        />
      </div>

      <div className='col-9 col-md-10 col-lg-11'>
        <b>
          {num}
          {name && (
            <>
              {' '}
              {name}
            </>
          )}
        </b>
        {/* <p>{desc}</p> */}
      </div>
      <div className='col-12'>
        <hr />
      </div>
    </React.Fragment>
  );
};

// –{' '}

export default function RoadSignsPage() {
  return (
    <div className='container'>
      {roadSignGroups.map(({ id, info, name, desc }) => (
        <div className='row  gy-md-3 ' key={id}>
          <div className='col-12 '>
            <h3>{name}</h3>
            <p>{desc}</p>
          </div>

          {filterDoubleElementGroup(getRoadSignsByGroup(id)).map(RoadSignBlock)}

          {info && <div className='col-12'>{info}</div>}
        </div>
      ))}
    </div>
  );
}

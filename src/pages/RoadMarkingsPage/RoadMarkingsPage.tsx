import { roadMarkings, roadMarkingsGroups } from '../../data/roadMarkings';
import React from 'react';

const getRoadMarkingsByGroup = (id: string) => {
  return roadMarkings.filter((item) => item.groupId === id);
};

export default function RoadMarkingsPage() {
  return (
    <div className='container'>
      {roadMarkingsGroups.map(({ id, info, name, desc }) => (
        <div className='row  gy-md-3 ' key={id}>
          <div className='col-12 '>
            <h3>{name}</h3>
            <br />
            <p>{desc}</p>
          </div>

          {getRoadMarkingsByGroup(id)?.map(({ num, name, desc }) => (
            <React.Fragment key={num}>
              <div className='col-4 col-md-4 col-lg-3'>
                <img
                  src={`/assets/images/road-markings/${num}.png`}
                  alt={`разметка пдд ${num}`}
                  style={{
                    width: '100%',
                  }}
                />
              </div>

              <div className='col-8 col-md-8 col-lg-9'>
                <b>
                  {num}
                  {name && (
                    <>
                      {' '}–{' '}
                      {name}
                    </>
                  )}
                </b>
                <p>{desc}</p>
              </div>
            </React.Fragment>
          ))}

          {info && <div className='col-12'>{info}</div>}
        </div>
      ))}
    </div>
  );
}

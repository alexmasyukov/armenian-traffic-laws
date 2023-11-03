import React, { Fragment } from 'react';
import BaseLayout from '../layouts/BaseLayout/BaseLayout';
import { roadSignGroups, roadSigns } from '../data/roadSigns';

const roadSignsByGroup = roadSignGroups.map((roadSignGroup) => {
  return {
    ...roadSignGroup,
    roadSigns: roadSigns.filter(({ groupId }) => groupId === roadSignGroup.id),
  };
});

export default function RoadSigns() {
  return (
    <BaseLayout>
      <table>
        <tbody>
          {roadSignsByGroup.map(({ description, id, name, roadSigns }) => (
            <Fragment key={id}>
              <tr>
                <td colSpan={3}>
                  {id}. {name}
                </td>
              </tr>
              <tr>
                <td colSpan={3}>{description}</td>
              </tr>
              <tr>
                <td>Номер</td>
                <td>Изображение</td>
                <td>Название</td>
              </tr>

              {roadSigns.map(({ description, name, number, imageGroup, signsGroup }) => (
                <tr key={number}>
                  <td>{number}</td>
                  <td>
                    <img src={`/assets/road-signs/${number}.png`} alt={name} />
                    <br />
                    {imageGroup?.map((image) => (
                      <img src={`/assets/road-signs/${image}.png`} alt={name} />
                    ))}
                  </td>
                  <td>{name}</td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </BaseLayout>
  );
}

import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import { RoadSignGroup, roadSignGroups, roadSigns } from '../data/roadSigns';

export default function Home() {
  return (
    <BaseLayout>
      {roadSigns.map((roadSign) => (
        <>
          https://transinfo.am/img/aaaaa/{roadSign.number}.png
          <br />
        </>
      ))}
    </BaseLayout>
  );
}

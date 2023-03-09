import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import { RoadSignGroup, roadSignGroups, roadSigns } from '../data/roadSigns';

export default function Home() {
  return (
    <BaseLayout>
      {roadSigns.map((roadSign) => {
        if (roadSign?.imageGroup) {
          roadSign?.imageGroup.map((image) => {
            return (
              <>
                https://transinfo.am/img/aaaaa/{image}.png
                <br />
                https://transinfo.am/img/aaaaa/{image}.PNG
                <br />
              </>
            );
          });
        }

        return (
          <>
            https://transinfo.am/img/aaaaa/{roadSign.number}.png
            <br />
            https://transinfo.am/img/aaaaa/{roadSign.number}.PNG
            <br />
          </>
        );
      })}
    </BaseLayout>
  );
}

import { RoadElement } from './types';

const roadSigns: RoadElement[] = [
  {
    num: '1.32',
    groupId: '1',
    name: 'Затор',
    desc: 'Участок дороги, на котором образовался затор',
  },
  {
    num: '1.33',
    groupId: '1',
    name: 'Прочие опасности',
    desc: 'Участок дороги, на котором имеются опасности, не предусмотренные другими предупреждающими знаками',
  },
  {
    num: '1.34.1',
    groupId: '1',
    elmGroup: ['1.34.1', '1.34.2'],
    imgGroup: ['1.34.1', '1.34.11', '1.34.12'],
    name: 'Направление поворота',
    desc: 'Направление движения на закруглении дороги малого радиуса с ограниченной видимостью. Направление объезда ремонтируемого участка дороги',
  },
  {
    num: '1.34.2',
    groupId: '1',
    elmGroup: ['1.34.1', '1.34.2'],
    imgGroup: ['1.34.1', '1.34.11', '1.34.12'],
    name: 'Направление поворота',
    desc: 'Направление движения на закруглении дороги малого радиуса с ограниченной видимостью. Направление объезда ремонтируемого участка дороги',
  },
  {
    num: '2.1',
    groupId: '2',
    name: 'Главная дорога',
    desc: 'Дорога, на которой предоставлено право преимущественного проезда нерегулируемых перекрестков.',
  },
];

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

  usedRoadSigns;

  return result;
};

const res = filterDoubleElementGroup(roadSigns).map((roadSign) => roadSign.num);

console.log(res);

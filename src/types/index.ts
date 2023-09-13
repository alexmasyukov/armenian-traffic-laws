export type RoadElementGroup = {
  id: string;
  name: string;
  desc: string | React.ReactNode;
  info?: React.ReactNode;
};

export type RoadElement = {
  num: string;
  groupId: string;
  name?: string;
  desc: React.ReactNode | string;
  elmGroup?: string[];
  imgGroup?: string[];
};

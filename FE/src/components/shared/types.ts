import type { GLTF } from "three-stdlib";

export type ProjectType = {
  id: string | undefined;
  project: string;
  startDate: Date | undefined;
  numberOfmilestone: number;
  owner: string;
  location: string;
  finished: boolean;
  milestones?: MilestoneType[];
};

type MilestoneType = {
  name: string;
  number: number;
  picture?: [];
  model?: GLTF;
};

export type ProjectFieldsType = {
  label?: string;
  name: string;
  type?: string;
  value?: string;
  checkError?: string | undefined;
};

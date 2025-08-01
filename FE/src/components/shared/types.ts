
export type ProjectType = {
  id: string;
  project: string;
  startDate: string;
  numberOfStage: number;
  owner: string;
  location: string;
  finished: boolean;
  stage?: MilestoneType[];
};

type MilestoneType = {
  stageName: string;
  stageNumber: number;
  picture?: [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model?: any;
};

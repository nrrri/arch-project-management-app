export type projectType = {
  project: string;
  startDate: string;
  numberOfStage: number;
  owner: string;
  location: string;
  finished: boolean;
  stage?: stageType[];
};

type stageType = {
  stageName: string;
  stageNumber: number;
  picture?: [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model?: any;
};

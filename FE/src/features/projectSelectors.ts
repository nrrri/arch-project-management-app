import type { RootState } from "@/app/store";

export const selectProjects = (state: RootState) => state.projects.list;
export const selectFinishedProjects = (state: RootState) =>
  state.projects.list.filter((p) => p.finished);

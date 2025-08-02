import type { RootState } from "@/app/store";

export const selectProjects = (state: RootState) => state.projects.projects;
export const selectProjectStatus = (state: RootState) => state.projects.status;
export const selectProjectError = (state: RootState) => state.projects.error;

import type { ProjectType } from "@/components/shared/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  projects: ProjectType[];
}

const initialState: ProjectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<ProjectType>) {
      state.projects.push(action.payload);
    },
    addMilestone(state, action: PayloadAction<ProjectType[]>) {
      state.projects = action.payload;
    },
    toggleFinished(state, action: PayloadAction<string>) {
      const project = state.projects.find((p) => p.project === action.payload);
      if (project) project.finished = !project.finished;
    },
  },
});

export const { addProject, toggleFinished } = projectSlice.actions;
export default projectSlice.reducer;

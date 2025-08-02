import type { ProjectType } from "@/components/shared/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  list: ProjectType[];
}

const initialState: ProjectState = {
  list: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<ProjectType>) {
      state.list.push(action.payload);
      console.log(state.list);
    },
    addMilestone(state, action: PayloadAction<ProjectType[]>) {
      state.list = action.payload;
    },
    toggleFinished(state, action: PayloadAction<string>) {
      const project = state.list.find((p) => p.project === action.payload);
      if (project) project.finished = !project.finished;
    },
  },
});

export const { addProject, addMilestone, toggleFinished } =
  projectSlice.actions;
export default projectSlice.reducer;

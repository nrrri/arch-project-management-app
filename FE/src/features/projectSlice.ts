import type { ProjectType } from "@/components/shared/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  projects: ProjectType[];
  status: "idle" | "succeeded" | "failed" | "loading";
  error: null | string;
}

const initialState: ProjectState = {
  projects: [],
  status: "idle",
  error: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<ProjectType>) {
      state.projects.push(action.payload);
    },
    setStatus: (state, action: PayloadAction<ProjectState["status"]>) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addMilestone: (state, action: PayloadAction<ProjectType[]>) => {
      state.projects = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(addProject.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(
  //       addProject.fulfilled,
  //       (state, action: PayloadAction<ProjectType>) => {
  //         state.status = "succeeded";
  //         state.projects.push(action.payload); // add new project to state
  //       }
  //     )
  //     .addCase(addProject.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.payload as string;
  //     });
  // },
});
export const { addProject, addMilestone } =
  projectSlice.actions;
export default projectSlice.reducer;

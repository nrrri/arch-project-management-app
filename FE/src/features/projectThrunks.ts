// import type { ProjectType } from "@/components/shared/types";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import * as dotenv from "dotenv";
// dotenv.config();

// const API_URL = process.env;
// // Create a project via POST request
// export const addProject = createAsyncThunk<ProjectType, ProjectType>(
//   "projects/addProject",
//   async (newProject, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(API_URL, newProject);
//       console.log("res", response.data);
//       return response.data;
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (err: any) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

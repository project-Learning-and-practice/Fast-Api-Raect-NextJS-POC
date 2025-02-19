import student from "@/app/Models/studentModel";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Student {
  name: string;
  age: number;
  email: string;
}

interface StudentState {
  students: Student[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentState = {
  students: [],
  loading: false,
  error: null,
};

const API_URL = "http://localhost:8000/api/students/";

export const addStudent = createAsyncThunk(
  "students/add",
  async (student: student) => {
    const response = await axios.post(API_URL, student);
    return response.data;
  }
);
const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    createStudent(addStudent, action: PayloadAction<student>) {
      addStudent.students.push(action.payload);
    },
  },
});

// const studentSlice = createSlice({
//   name: "student",
//   initialState: initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addStudent.fulfilled, (state, action) => {
//         state.students.push(action.payload);
//       })
//       .addCase(addStudent.rejected, (state, action) => {
//         console.log("student save rejected");
//       });
//   },
// });

// export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;

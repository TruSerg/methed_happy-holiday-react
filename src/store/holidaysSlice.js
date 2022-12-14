import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchHolidays = createAsyncThunk(
  "holidays/fetchHolidays",
  async () => {
    const res = await fetch(URI_API);
    const data = await res.json();
    return data;
  }
);

const holidaysSlice = createSlice({
  name: "holidays",
  initialState: {
    holidays: {},
    isLoading: "",
  },
  reducers: {},
  extraReducers: {
    [fetchHolidays.pending]: (state) => {
      state.isLoading = "loading";
    },
    [fetchHolidays.fulfilled]: (state, action) => {
      state.isLoading = "success";

      state.holidays = action.payload;
    },
    [fetchHolidays.rejected]: (state) => {
      state.isLoading = "failed";

      state.holidays = {};
    },
  },
});

export const { setHoliday } = holidaysSlice.actions;

export default holidaysSlice.reducer;

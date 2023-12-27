import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk for fetching data from the Dragons API
export const fetchDragons = createAsyncThunk('data/fetchDragons', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/dragons');
  const data = await response.json();
  return data;
});

// Define the async thunk for fetching data from the Missions API
export const fetchmissions = createAsyncThunk('data/fetchmissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data;
});

// Create a slice
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    dragonsData: [],
    missionsData: [],
    dragonsStatus: 'idle',
    missionsStatus: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Dragons API
      .addCase(fetchDragons.pending, (state) => {
        state.dragonsStatus = 'loading';
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.dragonsStatus = 'succeeded';
        state.dragonsData = action.payload;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.dragonsStatus = 'failed';
        state.error = action.error.message;
      })
      // Missions API
      .addCase(fetchmissions.pending, (state) => {
        state.missionsStatus = 'loading';
      })
      .addCase(fetchmissions.fulfilled, (state, action) => {
        state.missionsStatus = 'succeeded';
        state.missionsData = action.payload;
      })
      .addCase(fetchmissions.rejected, (state, action) => {
        state.missionsStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;

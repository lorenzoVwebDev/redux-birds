import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: [{
    spared: false
  }],
  reducers: {
    changeSpared: (state, action) => {
      state[0].spared = action.payload.spared;
    }
  }
})

export const { changeSpared } = errorSlice.actions;

export default errorSlice.reducer;
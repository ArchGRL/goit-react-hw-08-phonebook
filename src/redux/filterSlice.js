import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
    resetFilter: () => {
      return '';
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'nav',
  initialState: { activeSection: 'home' },
  reducers: {
    setActive: (state, action) => { state.activeSection = action.payload; }
  }
});

export const { setActive } = navSlice.actions;
export default navSlice.reducer;
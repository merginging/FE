import { configureStore, createSlice } from '@reduxjs/toolkit';

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    shouldScrollToJoinForm: false,
  },
  reducers: {
    setShouldScrollToJoinForm(state, action) {
      state.shouldScrollToJoinForm = action.payload;
    },
  },
});

export const { setShouldScrollToJoinForm } = scrollSlice.actions;

const store = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
  },
});

export default store;

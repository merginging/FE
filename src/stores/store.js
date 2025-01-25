import { configureStore, createSlice } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    shouldScrollToJoinForm: false,
  },
  reducers: {
    setShouldScrollToJoinForm(state, action) {
      state.shouldScrollToJoinForm = action.payload;
    },
    setTargetScrollPage(state, action) {
      state.targetScrollPage = action.payload;
    },
  },
});

export const { setShouldScrollToJoinForm } = scrollSlice.actions;

const store = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
    auth: authReducer,
  },
});

export default store;

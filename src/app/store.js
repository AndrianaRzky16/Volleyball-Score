// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import scoreboardReducer from '../features/scoreboardSlice';

const store = configureStore({
  reducer: {
    scoreboard: scoreboardReducer,
  },
});

export default store;

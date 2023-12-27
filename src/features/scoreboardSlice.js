import { createSlice } from "@reduxjs/toolkit";

const scoreboardSlice = createSlice({
  name: "scoreboard",
  initialState: {
    team1: 0,
    team2: 0,
    currentSet: 1,
    isServiceTeam1: true,
  },
  reducers: {
    incrementScore: (state, action) => {
      state[action.payload] += 1;
    },
    decrementScore: (state, action) => {
      if (state[action.payload] > 0) {
        state[action.payload] -= 1;
      }
    },
    toggleService: (state) => {
      state.isServiceTeam1 = !state.isServiceTeam1;
    },
    resetScore: (state) => {
      return { ...state, team1: 0, team2: 0, currentSet: 1, isServiceTeam1: true };
    },
  },
});

export const { incrementScore, decrementScore, toggleService, resetScore } =
  scoreboardSlice.actions;
export default scoreboardSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Slice groups States, Reducers, Actions together
const gameSlice = createSlice({
  name: "rps",
  initialState: {
    players: [
      { player: "User", score: 0 },
      { player: "Brad", score: 0 },
    ]
  },
  reducers: {
    increaseScore: (state, action) => {
      const playerDetails = state.players.find(obj => {
        console.log(action.payload);
        return obj.player === action.payload
      }
      );
      console.log("playerDetails", playerDetails);
      if (playerDetails) {
        playerDetails.score += 1;
      }
    },
    decreaseScore: (state, action) => {
      const playerDetails = state.players.find(obj => obj.id === action.payload.id);
      playerDetails.score -= 1;
    },
    resetScore: (state) => {
      state.players.forEach(player => {
        player.score = 0;
      });
    },
    setScore: (state, action) => {
      state.value = action.payload;
    },
  }
});

export const { increaseScore, resetScore } = gameSlice.actions;

export default gameSlice.reducer;


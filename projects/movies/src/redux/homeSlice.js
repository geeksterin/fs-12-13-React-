import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topMovies: [],
  topTvShows: [],
  upcomingMovies: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setTopMovies: (state, action) => {
      state.topMovies = action.payload.results;
    },
    setTopTvShows: (state, action) => {
      state.topTvShows = action.payload.results;
      return {
        ...state,
        topTvShow: action.payload.results
      }
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload.results;
    },
  },
});

export const { setTopMovies, setTopTvShows, setUpcomingMovies } = homeSlice.actions;

export default homeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies:null,
    popularMovies:null,
    upComingMovies:null,
    trendingMovies:null,
}

const movieSlice  = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upComingMovies = action.payload
        },
        
    }
    
})

export const { addNowPlayingMovies , addPopularMovies  , addTrendingMovies , addUpcomingMovies ,  } = movieSlice.actions

export default movieSlice.reducer
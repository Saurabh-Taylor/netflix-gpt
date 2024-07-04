import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies:null
}

const movieSlice  = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        }
    }
    
})

export const { addNowPlayingMovies } = movieSlice.actions

export default movieSlice.reducer
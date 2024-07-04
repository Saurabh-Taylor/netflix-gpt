import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import moviesReducer from "./features/movieSlice";

const store  = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer
    }
})

export default store
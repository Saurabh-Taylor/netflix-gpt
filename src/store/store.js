import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import moviesReducer from "./features/movieSlice";
import gptReducer from "./features/gptSlice";

const store  = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt: gptReducer,
    }
})

export default store
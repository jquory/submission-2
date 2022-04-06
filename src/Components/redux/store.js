import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './slice/sliceToken'

export default configureStore({
    reducer: {
        token: tokenReducer,
    }
})
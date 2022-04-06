import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : window.location.hash.substring(1, window.location.hash.length -1)
    .split('&')[0]
    .split('=')[1]
}

const sliceToken = createSlice({
    name : 'token',
    initialState,
    reducers: {}
})

export default sliceToken.reducer
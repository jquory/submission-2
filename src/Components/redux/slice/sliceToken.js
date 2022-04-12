import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : localStorage.getItem('access_token') ?? '',
}

const sliceToken = createSlice({
    name : 'token',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            const {accessToken} = action.payload
            localStorage.setItem('access_token', accessToken)
            state.token = accessToken
        },
        removeAccessToken: (state) => {
            state.token = ''
            localStorage.removeItem('access_token')
        }
    }
})
export const { setAccessToken, removeAccessToken } = sliceToken.actions

export default sliceToken.reducer
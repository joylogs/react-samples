// import { NavigationState } from "@react-navigation/native";
import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
    token: string | undefined
    userInfo: any | undefined
    language: string
}

const initialState: NavigationState = {
    token: undefined,
    userInfo: undefined,
    language: 'en',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
})
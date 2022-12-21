import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  token?: string | null
}

const initialState: AuthState = {
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string | null>)=>{
        state.token = action.payload
    }   
  },
})

// Action creators are generated for each case reducer function
export const { setAuthToken } = authSlice.actions

export default authSlice.reducer
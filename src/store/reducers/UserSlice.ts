import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";


interface UserState {
   users: IUser[]
   isLoading: boolean
   error: string
}

const initialState: UserState = {
   users: [],
   isLoading: false,
   error: ''
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      fetchingUsers: (state) => {
         state.isLoading = true
      },
      fetchingUsersSuccess: (state, action: PayloadAction<IUser[]>) => {
         state.users = action.payload
         state.isLoading = false
         state.error = ''
      },
      fetchingUsersError: (state, action: PayloadAction<string>) => {
         state.isLoading = false
         state.error = action.payload
      }
   }
})

export const {
   fetchingUsers,
   fetchingUsersSuccess,
   fetchingUsersError
} = userSlice.actions

export default userSlice.reducer
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { postAPI } from "../services/PostServise";
import userReducer from './reducers/UserSlice'

const rootReduser = combineReducers({
   userReducer,
   [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReduser,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(postAPI.middleware)
   })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
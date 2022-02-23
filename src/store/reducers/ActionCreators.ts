import axios, { AxiosError } from "axios"
import { IUser } from "../../models/IUser"
import { AppDispatch } from "../store"
import { fetchingUsers, fetchingUsersError, fetchingUsersSuccess } from "./UserSlice"

export const fetchUsers = () => async (dispatch: AppDispatch) => {
   try {
      dispatch(fetchingUsers())
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      dispatch(fetchingUsersSuccess(response.data))
   } catch (e: any) {
      dispatch(fetchingUsersError(e.message))
   }
}
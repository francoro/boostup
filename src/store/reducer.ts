import { createSlice } from '@reduxjs/toolkit'
import { getDataAPI } from '../services'
import initialState, { IDataState } from './initialState'
const data = createSlice({
  name: '/data',
  initialState,
  reducers: {
    getDataStart: (state: IDataState) => {
      state.isFetching = true
    },
    getDataError: (state: IDataState) => {
      state.isFetching = false
      state.error = true
    },
    getDataSuccess: (state: IDataState, { payload }: any) => {
      state.isFetching = false
      state.error = false
      state.data = payload
  },
}
})

export const { getDataStart, getDataError, getDataSuccess } = data.actions

export default data.reducer

export const getData = (date: string) => {
    return (dispatch: any) => {
      dispatch(getDataStart())
      return getDataAPI(date)
      .then((response: any) => {
        dispatch(getDataSuccess(response))
      })
      .catch(() => {
        dispatch(getDataError())
      })
    }
}
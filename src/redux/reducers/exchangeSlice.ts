import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// Types
import { IDirection } from '../../models/direction'
import { IFilter } from '../../models/filters'

interface exchangeState {
  directions: IDirection[]
  filters: IFilter[]
  isLoading: boolean
}

const initialState: exchangeState = {
  directions: [],
  filters: [],
  isLoading: false,
}

export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    exchangeLoading: (state) => {
      state.isLoading = true
    },
    exchangeLoadingOk: (
      state,
      action: PayloadAction<{ directions: IDirection[]; filters: IFilter[] }>
    ) => {
      state.isLoading = false
      state.directions = action.payload.directions
      state.filters = action.payload.filters
    },
    exchangeLoadingError: (state) => {
      state.isLoading = false
    },
  },
})

export const { exchangeLoading, exchangeLoadingOk, exchangeLoadingError } =
  exchangeSlice.actions
export default exchangeSlice.reducer

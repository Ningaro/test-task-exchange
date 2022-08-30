import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Types
import { AllT, ICategory } from '../../models/categories'
import { IDirection } from '../../models/direction'
import { IFilter } from '../../models/filters'

interface exchangeState {
  directions: IDirection[]
  filters: IFilter[]
  isLoading: boolean
  fromCategory: string
  toCategory: string
  categories: ICategory[]
  fromDirection?: AllT
}

const initialState: exchangeState = {
  directions: [],
  filters: [],
  isLoading: false,
  fromCategory: 'Всё',
  toCategory: 'Всё',
  categories: [
    {
      title: 'Всё',
      elems: [
        'ACRUB',
        'BTC',
        'CASHRUB',
        'CASHUSD',
        'ETH',
        'SBERRUB',
        'TCSBRUB',
        'USDTTRC',
      ],
    },
    { title: 'Криптовалюты', elems: ['BTC', 'ETH', 'USDTTRC'] },
    { title: 'Банки', elems: ['ACRUB', 'SBERRUB', 'TCSBRUB'] },
    { title: 'Наличные', elems: ['CASHUSD', 'CASHRUB'] },
  ],
  fromDirection: undefined,
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
    setFromCategory: (state, action: PayloadAction<string>) => {
      state.fromCategory = action.payload
      // 👔 при изменении списка from список to откатывается на список ‘все’
      state.toCategory = 'Всё'
    },
    setToCategory: (state, action: PayloadAction<string>) => {
      state.toCategory = action.payload
    },
    setFromDirection: (
      state,
      action: PayloadAction<exchangeState['fromDirection']>
    ) => {
      state.fromDirection = action.payload
    },
  },
})

export const {
  exchangeLoading,
  exchangeLoadingOk,
  exchangeLoadingError,
  setFromCategory,
  setToCategory,
  setFromDirection,
} = exchangeSlice.actions
export default exchangeSlice.reducer

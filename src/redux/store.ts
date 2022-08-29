import { configureStore } from '@reduxjs/toolkit'
import exchangeReducer from './reducers/exchangeSlice'

const store = configureStore({
  reducer: {
    exchangeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type MyDispatch = typeof store.dispatch

export default store

import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, MyDispatch } from '../redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useMyDispatch: () => MyDispatch = useDispatch
export const useMySelector: TypedUseSelectorHook<RootState> = useSelector

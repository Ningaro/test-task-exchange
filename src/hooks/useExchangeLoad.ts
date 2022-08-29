import axios from 'axios'
import { useEffect } from 'react'

// Redux
import { useMyDispatch } from './redux'
import {
  exchangeLoading,
  exchangeLoadingError,
  exchangeLoadingOk,
} from '../redux/reducers/exchangeSlice'
import { IFilter } from '../models/filters'
import { IDirection } from '../models/direction'

export default function useExchangeLoad() {
  const dispatch = useMyDispatch()
  useEffect(() => {
    const fetchData = async () => {
      // Начинаем загрузку
      dispatch(exchangeLoading())

      // Получаем данные
      const { data: filters } = await axios.get<IFilter[]>(
        'http://localhost:3000/mockData/filters.json'
      )
      const { data: directions } = await axios.get<IDirection[]>(
        'http://localhost:3000/mockData/directions.json'
      )

      // Записываем данные
      dispatch(exchangeLoadingOk({ filters, directions }))
    }

    fetchData().catch(() => dispatch(exchangeLoadingError()))
  }, [dispatch])
}

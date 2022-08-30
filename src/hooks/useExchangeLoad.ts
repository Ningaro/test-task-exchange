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

const PUBLIC_URL = process.env.PUBLIC_URL

export default function useExchangeLoad() {
  const dispatch = useMyDispatch()
  useEffect(() => {
    const fetchData = async () => {
      // Начинаем загрузку
      dispatch(exchangeLoading())

      // Получаем данные
      const { data: filters } = await axios.get<IFilter[]>(
        `${PUBLIC_URL}/mockData/filters.json`
      )
      const { data: directions } = await axios.get<IDirection[]>(
        `${PUBLIC_URL}/mockData/directions.json`
      )

      // Записываем данные
      setTimeout(
        () => dispatch(exchangeLoadingOk({ filters, directions })),
        2000
      )
    }

    fetchData().catch(() => dispatch(exchangeLoadingError()))
  }, [dispatch])
}

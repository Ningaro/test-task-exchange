// Redux
import { useMySelector } from '../hooks/redux'
import useExchangeLoad from '../hooks/useExchangeLoad'
import Exchange from './Exchange'

// Screens
import Loading from './Loading'

export default function Root() {
  const isLoading = useMySelector((state) => state.exchange.isLoading)

  // Получения данных с бека
  useExchangeLoad()
  return isLoading ? <Loading /> : <Exchange />
}

import useExchangeLoad from '../hooks/useExchangeLoad'

export default function Root() {
  useExchangeLoad()
  return <p>Привет из React!</p>
}

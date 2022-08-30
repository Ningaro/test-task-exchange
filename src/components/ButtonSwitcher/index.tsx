// Redux
import { useMyDispatch, useMySelector } from '../../hooks/redux'
import {
  setFromCategory,
  setToCategory,
} from '../../redux/reducers/exchangeSlice'

// Styles
import Button from './Button'
import './styles.scss'

interface ButtonSwitcherProps {
  type: 'to' | 'from'
  data: { id: string; text: string }[]
}

export default function ButtonSwitcher({ data, type }: ButtonSwitcherProps) {
  const dispatch = useMyDispatch()
  const setEvent = type === 'from' ? setFromCategory : setToCategory
  const selectedElem = useMySelector(({ exchange }) =>
    type === 'from' ? exchange.fromCategory : exchange.toCategory
  )

  return (
    <>
      {data.map(({ id, text }) => (
        <Button
          theme={id === selectedElem ? 'button-solid' : 'button-hide'}
          key={id}
          onClick={() => dispatch(setEvent(id))}
        >
          {text}
        </Button>
      ))}
    </>
  )
}

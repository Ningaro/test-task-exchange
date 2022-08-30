import { useMemo } from 'react'

// Redux
import { useMyDispatch, useMySelector } from '../../hooks/redux'
import { setFromDirection } from '../../redux/reducers/exchangeSlice'

interface SelectProps {
  type: 'to' | 'from'
}

export default function Select({ type }: SelectProps) {
  const dispatch = useMyDispatch()

  const isFrom = type === 'from'

  const filters = useMySelector((state) => state.exchange.filters)
  const directions = useMySelector((state) => state.exchange.directions)
  const categories = useMySelector((state) => state.exchange.categories)

  const fromDirection = useMySelector(({ exchange }) => exchange.fromDirection)
  const category = useMySelector(({ exchange }) =>
    isFrom ? exchange.fromCategory : exchange.toCategory
  )

  const selectedCategoryFullInfo = categories.find(
    (cat) => cat.title === category
  )

  const variants = useMemo(() => {
    const selectedDirections = directions.filter((dir) =>
      // @ts-ignore
      selectedCategoryFullInfo?.elems.includes(dir.code)
    )

    console.log('selectedDirections', selectedDirections)

    if (!isFrom) {
      const filtersForFromCategory = filters
        .find((filter) => filter.from.code === fromDirection)
        ?.to.map((filter) => filter.code)

      console.log('filtersForFromCategory', filtersForFromCategory)

      const x = selectedDirections.filter((direction) =>
        filtersForFromCategory?.includes(direction.code)
      )

      console.log('Хуета', x)

      return x
    }

    return selectedDirections
  }, [
    fromDirection,
    directions,
    filters,
    isFrom,
    selectedCategoryFullInfo?.elems,
  ])

  return (
    <select
      className="select"
      onChange={
        isFrom
          ? ({ currentTarget }) =>
              // @ts-ignore
              dispatch(setFromDirection(currentTarget.value))
          : undefined
      }
    >
      <option>Не выбрано</option>
      {variants.map(({ name, code }) => (
        <option value={code} key={code}>
          {name}
        </option>
      ))}
    </select>
  )
}

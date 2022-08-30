// Components
import ButtonSwitcher from '../components/ButtonSwitcher'
import Center from '../components/Center'
import Header from '../components/Header'
import SelectWithInput from '../components/SelectWithInput'
import Stack from '../components/Stack'

// Redux
import { useMySelector } from '../hooks/redux'

export default function Exchange() {
  const categories = useMySelector((state) => state.exchange.categories)

  return (
    <Center>
      <Stack>
        <Header>Отдаёте</Header>
        <Stack dir="row">
          <ButtonSwitcher
            type="from"
            data={categories.map(({ title }) => ({ id: title, text: title }))}
          />
        </Stack>
        <SelectWithInput placeholder="1.1123..." type="from" />
        <Header>Получаете</Header>
        <Stack dir="row">
          <ButtonSwitcher
            type="to"
            data={categories.map(({ title }) => ({ id: title, text: title }))}
          />
        </Stack>
        <SelectWithInput placeholder="9822.11..." type="to" />
      </Stack>
    </Center>
  )
}

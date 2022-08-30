// Components
import Input from './Input'
import Select from './Select'

// Styles
import './styles.scss'

interface SelectWithInputProps {
  placeholder: string
  type: 'to' | 'from'
}

export default function SelectWithInput({
  placeholder,
  type,
}: SelectWithInputProps) {
  return (
    <div className="select-with-input">
      <Input placeholder={placeholder} />
      <Select type={type} />
    </div>
  )
}

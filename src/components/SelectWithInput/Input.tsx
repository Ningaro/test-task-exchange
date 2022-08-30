interface InputProps {
  placeholder: string
}

export default function Input({ placeholder }: InputProps) {
  return <input className="input" type="number" placeholder={placeholder} />
}

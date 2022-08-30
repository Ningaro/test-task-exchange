// Styles
import './styles.scss'

interface ButtonProps {
  theme: 'button-hide' | 'button-solid'
  children: string
  onClick: () => void
}

export default function Button({ children, theme, onClick }: ButtonProps) {
  return (
    <button className={`button ${theme}`} onClick={() => onClick()}>
      {children}
    </button>
  )
}

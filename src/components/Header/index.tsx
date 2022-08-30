// Styles
import './styles.scss'

interface HeaderProps {
  children: string
}

export default function Header({ children }: HeaderProps) {
  return <div className="header">{children}</div>
}

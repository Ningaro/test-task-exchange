// Styles
import './styles.scss'

interface CenterProps {
  children: JSX.Element[] | JSX.Element
}

export default function Center({ children }: CenterProps) {
  return <div className="center">{children}</div>
}

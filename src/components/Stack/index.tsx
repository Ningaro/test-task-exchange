// Styles
import './styles.scss'

interface StackProps {
  dir?: 'row' | 'column'
  children: JSX.Element[] | JSX.Element
}

export default function Stack({ dir, children }: StackProps) {
  return (
    <div className={`stack ${dir === 'row' ? 'stack-h' : 'stack-v'}`}>
      {children}
    </div>
  )
}

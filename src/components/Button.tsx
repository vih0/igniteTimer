import styles from './Button.module.css'
import { ButtonContainer, Buttonvariant } from './Button.styles'
interface ButtonProps {
  variant?: ButtonVariant
}
export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Send</ButtonContainer>
}

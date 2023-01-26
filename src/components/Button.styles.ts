import styled from 'styled-components'
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'
interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'yellow',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin-left: 10px;
  border: 0;
  border-radius: 8px;
  color: white;
  background-color: ${(props) => props.theme['green-500']};
  /* ${(props) => `background-color:${buttonVariants[props.variant]}`} */
`

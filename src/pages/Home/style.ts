import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const StartButton = styled(BaseButton)`
  background-color: ${(porps) => porps.theme['green-500']};
  color: ${(porps) => porps.theme['gray-100']};
  &:not(:disabled):hover {
    background-color: ${(porps) => porps.theme['green-700']};
  }
`
export const StopButton = styled(BaseButton)`
  background-color: ${(porps) => porps.theme['red-500']};
  color: ${(porps) => porps.theme['gray-100']};
  &:not(:disabled):hover {
    background-color: ${(porps) => porps.theme['red-700']};
  }
`

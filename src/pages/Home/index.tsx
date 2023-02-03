import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou Trabalhar em: </label>
          <input id="task" />
          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <button type="submit">
          <Play />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}

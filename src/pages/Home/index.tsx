import { Play } from 'phosphor-react'
import * as S from './style'

export function Home() {
  return (
    <S.HomeContainer>
      <form action="">
        <S.FormContainer>
          <label htmlFor="task">Vou Trabalhar em: </label>
          <input id="task" />
          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />
        </S.FormContainer>
        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>
        <button type="submit">
          <Play />
          Começar
        </button>
      </form>
    </S.HomeContainer>
  )
}

import { Play } from 'phosphor-react'
import * as S from './style'

export function Home() {
  return (
    <S.HomeContainer>
      <form action="">
        <S.FormContainer>
          <label htmlFor="task">Vou Trabalhar em: </label>
          <S.TaskInput id="task" placeholder="Dê um nome para o seu projeto" />
          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesInput type="number" id="minutesAmount" placeholder="00" />
        </S.FormContainer>
        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>
        <S.StartButton type="submit" disabled>
          <Play />
          Começar
        </S.StartButton>
      </form>
    </S.HomeContainer>
  )
}

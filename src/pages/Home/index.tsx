import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as S from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleValidation = zod.object({
  task: zod.string().min(1, 'informe uma tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})
type newCycleFormData = zod.infer<typeof newCycleValidation>
export function Home() {
  const { register, handleSubmit, watch } = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleValidation),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: newCycleFormData) {
    console.log(data)
  }
  const task = watch('task')
  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <S.FormContainer>
          <label htmlFor="task">Vou Trabalhar em: </label>
          <S.TaskInput
            id="task"
            list="task-sugestion"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />
          <datalist id="task-sugestion">
            <option value="teste1" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
        </S.FormContainer>
        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>
        <S.StartButton type="submit" disabled={!task}>
          <Play />
          Começar
        </S.StartButton>
      </form>
    </S.HomeContainer>
  )
}

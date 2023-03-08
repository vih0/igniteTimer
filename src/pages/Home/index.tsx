import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as S from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'

const newCycleValidation = zod.object({
  task: zod.string().min(1, 'informe uma tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})
type newCycleFormData = zod.infer<typeof newCycleValidation>
interface Cycle {
  id: string
  task: string
  minutesAmount: number
}
export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPast, setAmountSecomdsPast] = useState(0)
  const { register, handleSubmit, watch, reset } = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleValidation),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPast : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  function handleCreateNewCycle(data: newCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    reset()
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
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <S.Separator>:</S.Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </S.CountdownContainer>
        <S.StartButton type="submit" disabled={!task}>
          <Play />
          Começar
        </S.StartButton>
      </form>
    </S.HomeContainer>
  )
}

import { HandPalm, Play } from 'phosphor-react'

import * as S from './style'

import { useEffect, useState } from 'react'

import { Form } from './components/Form'
import { Countdown } from './components/Countdown'
import { createContext } from 'react'


interface Cycle {
  id: string
  task: string
  minutesAmount: number
  start: Date
  interrupted?: Date
  finished?: Date
}
interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCycleCurrentIsFinish: () => void
}
export const ContextCycles = createContext({} as CyclesContextType)
export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)


  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interrupted: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  function markCycleCurrentIsFinish() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finished: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function handleCreateNewCycle(data: newCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      start: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecomdsPast(0)
    reset()
  }
  const task = watch('task')
  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <ContextCycles.Provider value={{ activeCycle, activeCycleId, markCycleCurrentIsFinish }}>
          <Form />
          <Countdown />
        </ContextCycles.Provider>
        {activeCycle ? (
          <S.StopButton type="button" onClick={handleInterruptCycle}>
            <HandPalm />
            Interromper
          </S.StopButton>
        ) : (
          <S.StartButton type="submit" disabled={!task}>
            <Play />
            Começar
          </S.StartButton>
        )}

      </form>
    </S.HomeContainer>
  )
}

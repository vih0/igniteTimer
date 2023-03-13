import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { ContextCycles } from '../..'
import * as S from './styles'



export function Countdown() {
    const { activeCycle, activeCycleId, markCycleCurrentIsFinish } = useContext(ContextCycles)
    const [amountSecondsPast, setAmountSecomdsPast] = useState(0)
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

    useEffect(() => {

        let interval: ReturnType<typeof setInterval> | undefined;

        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(
                    new Date(),
                    activeCycle.start,
                )
                if (secondsDifference === totalSeconds) {
                    markCycleCurrentIsFinish()
                    setAmountSecomdsPast(totalSeconds)
                    clearInterval(interval)
                } else {
                    setAmountSecomdsPast(secondsDifference)
                }
            }, 1000)
        }
        return () => {
            clearInterval(interval)
        }
    }, [activeCycle, totalSeconds, activeCycleId, markCycleCurrentIsFinish])
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPast : 0

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}:${seconds}`
        }
    }, [minutes, seconds, activeCycle])
    return (
        <S.CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <S.Separator>:</S.Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </S.CountdownContainer>
    )
}
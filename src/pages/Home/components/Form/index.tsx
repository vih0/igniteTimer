import { useFormAction } from 'react-router-dom'
import * as S from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'



const newCycleValidation = zod.object({
    task: zod.string().min(1, 'informe uma tarefa'),
    minutesAmount: zod.number().min(5).max(60),
})
type newCycleFormData = zod.infer<typeof newCycleValidation>

export function Form() {
    const { register, handleSubmit, watch, reset } = useFormAction<newCycleFormData>({
        resolver: zodResolver(newCycleValidation),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    })


    return (
        <S.FormContainer>
            <label htmlFor="task">Vou Trabalhar em: </label>
            <S.TaskInput
                id="task"
                list="task-sugestion"
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}
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
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
            />
        </S.FormContainer>
    )
}
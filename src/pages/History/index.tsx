import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico:</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>tarefa</td>
              <td>22 minutos</td>
              <td>2meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>22 minutos</td>
              <td>2meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>22 minutos</td>
              <td>2meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>22 minutos</td>
              <td>2meses</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}

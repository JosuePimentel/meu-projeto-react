import { useEffect, useState } from "react"
import style from './title.module.css'

function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    async function buscarDados() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => setTarefas(res))
    }

    buscarDados()
  }, [])

  return (
    <div className="container">
      <h1 className={style.title}>Deploy na vercel</h1>
      <div>
        {tarefas.map( tarefa => {
          return (
            <div className="task-item" key={tarefa.id}>
              <p> {tarefa.id} - {tarefa.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
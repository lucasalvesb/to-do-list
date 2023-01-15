import './Tasks.css'
import clipboard from '../assets/Clipboard.svg'
import check from '../assets/check.svg'
import trash from '../assets/trash.svg'
import plus from '../assets/plus.svg'
import { Trash } from 'phosphor-react'
import { FormEvent, ChangeEvent, useState } from 'react'



export default function Tasks() {
  const [tasks, setTasks] = useState(['faça isto isto e aquilo outro!'])
  const [newTask, setNewTask] = useState('')

  function handleDeleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task != taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTask])
    console.log(tasks)

    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function isDisabled() {
    return true
  }

  return (
    <>
      <div className="add-task-container">
        <form onSubmit={handleCreateNewTask}>
          <input
            placeholder="Adicione uma nova tarefa"
            className="task-area"
            onChange={handleNewTaskChange}
            value={newTask}
            maxLength={150}
          ></input>
          <button
            className="btn"
            type="submit"
          >
            Criar
            <img
              className="plus"
              src={plus}
            />
          </button>
        </form>
      </div>
      <div className="tasks-list-container">
        <header className="tasks-list-header">
          <p className="created-tasks">
            Tarefas criadas <span className="counter-created">0</span>
          </p>
          <p className="concluded-tasks">
            Concluídas <span className="counter-concluded">0</span>
          </p>
        </header>
        <main className="tasks-list-main">
          <ul>
            {tasks.map((task) => {
              return (
                <div className="tasks-list-box">
                  <div className="text-box">
                    <img
                      src={check}
                      className="check-img"
                    />
                    <li>{task}</li>
                  </div>
                  <div className="container-trash">
                    <button
                      /*                     onMouseDown={handleDeleteTask} */
                      title="Deletar comentário"
                    >
                      <img
                        src={trash}
                        className="trash-img"
                      />
                    </button>
                  </div>
                </div>
              )
            })}
          </ul>
          <img src={clipboard} />
          <p className="strong-paragraph">
            Você ainda não tem tarefas cadastradas
          </p>
          <p className="weak-paragraph">
            Crie tarefas e organize seus itens a fazer
          </p>
        </main>
      </div>
    </>
  )
}

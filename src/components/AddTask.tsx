import './AddTask.css'
import plus from '../assets/plus.svg'

export default function AddTask() {
  return (
    <div className="add-task-container">
      <input
        placeholder="Adicione uma nova tarefa"
        className="task-area"
      ></input>
      <span className="btn">
        Criar
        <img
          className="plus"
          src={plus}
        />
      </span>
    </div>
  )
}

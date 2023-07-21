import style from './todo.module.css'
import { CiEdit } from 'react-icons/ci'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiCheckCircle } from 'react-icons/bi'

const Todo = (props) => {
  return (
    <div className={`${props.isCompleted && style.completed} ${style.todo}`}>
      <p>{props.text}</p>
      <div className={style.icons}>
        <button className={style.edit} onClick={props.onEdit}>
          <CiEdit className={style.icon} />
        </button>
        <button className={style.done} onClick={props.onComplete}>
          <BiCheckCircle className={style.icon} />
        </button>
        <button className={style.delete} onClick={props.onDelete}>
          <AiOutlineDelete className={style.icon} />
        </button>
      </div>
    </div>
  )
}

export default Todo

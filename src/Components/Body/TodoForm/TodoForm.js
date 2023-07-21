import { BsFillPatchPlusFill } from 'react-icons/bs'
import style from './todoForm.module.css'
import { useEffect, useRef, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { GiCancel } from 'react-icons/gi'

const TodoForm = (props) => {
  const [todo, setTodo] = useState(props.edit ? props.edit.text : '')
  const myRef = useRef()
  const changeHandler = (e) => {
    setTodo(e.target.value)
  }
  const buttonHndler = (e) => {
    e.preventDefault()
    if (!todo) {
      alert(`You didn't write anything ...`)
    } else {
      props.submitTodo(todo)
      setTodo('')
    }
  }
  useEffect(() => {
    myRef.current.focus()
  })

  return (
    <form className={style.form} onSubmit={buttonHndler}>
      <input
        type="text"
        className={style.formInput}
        value={todo}
        placeholder={props.edit ? 'Update To Do ...' : 'To Do ...'}
        onChange={changeHandler}
        ref={myRef}
      />
      {props.edit ? (
        <button
          type="submit"
          className={`${style.button} ${style.editIcon} `}
          onClick={buttonHndler}
        >
          <CiEdit className={`${style.buttonIcon}`} />
        </button>
      ) : (
        <button
          type="submit"
          className={`${style.button} `}
          onClick={buttonHndler}
        >
          <BsFillPatchPlusFill className={style.buttonIcon} />
        </button>
      )}
      {props.edit ? (
        <button
          type="button"
          className={`${style.button} ${style.cancelIcon} `}
          onClick={props.onCanselEdit}
        >
          <GiCancel className={`${style.buttonIcon} ${style.iconCancel} `} />
        </button>
      ) : (
        ''
      )}
    </form>
  )
}

export default TodoForm

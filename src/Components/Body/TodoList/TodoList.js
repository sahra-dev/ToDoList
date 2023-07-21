import { useState } from 'react'
import Todo from '../Todo/Todo'
import style from './todoList.module.css'
import TodoForm from '../TodoForm/TodoForm'

const TodoList = ({ todos, updateTodo, compeleteHandler, deleteHandler }) => {
  const [edit, setEdit] = useState({ text: '', id: null, isCompleted: false })
  const editTodo = (newValue) => {
    updateTodo(newValue, edit.id)
    setEdit({ text: '', id: null })
  }
  const canselHandler = () => {
    setEdit({ text: '', id: null })
  }

  const todoss = todos.map((todo) => (
    <Todo
      text={todo.text}
      key={todo.id}
      id={todo.id}
      isCompleted={todo.isCompleted}
      onEdit={() => setEdit(todo)}
      onComplete={() => compeleteHandler(todo.id)}
      onDelete={() => deleteHandler(todo.id)}
    />
  ))
  if (todos.length === 0)
    return <p className={style.addSome}> Add Some Todos ...</p>
  else
    return (
      <div className={style.todoList}>
        {edit.id ? (
          <TodoForm
            submitTodo={editTodo}
            edit={edit}
            onCanselEdit={canselHandler}
          />
        ) : (
          todoss
        )}
      </div>
    )
}

export default TodoList

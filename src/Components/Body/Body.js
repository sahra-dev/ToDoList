import { useEffect, useState } from 'react'
import TodoForm from './TodoForm/TodoForm'
import TodoList from './TodoList/TodoList'
import style from './body.module.css'
import NavBar from '../NavBar/NavBar'

const Body = () => {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState(0)
  const [filteredTodos, setFilteredTodos] = useState([])
  const [selectedOption, setSelectedOption] = useState({
    value: 'all',
    label: 'All',
  })
  useEffect(() => {
    filterTodos(selectedOption)
  }, [todos, selectedOption])
  const addTodo = (input) => {
    // console.log(input);
    const newInput = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    }
    setValue(value + 1)
    setTodos([...todos, newInput])
    filterTodos()
  }
  const updateTodo = (newValue, id) => {
    console.log(newValue)
    const todo = {
      id,
      text: newValue,
      isCompleted: false,
    }
    const newTodos = [...todos]
    const index = newTodos.findIndex((todo) => todo.id === id)
    newTodos[index] = todo
    setTodos(newTodos)
  }
  const compeleteHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    const todos1 = [...todos]
    if (todos1[index].isCompleted) {
      setValue(value + 1)
    } else {
      setValue(value - 1)
    }
    todos1[index].isCompleted = !todos1[index].isCompleted
    setTodos(todos1)
  }
  const deleteHandler = (id) => {
    const todos1 = todos.filter((todo) => todo.id !== id)
    const founded = todos.find((todo) => todo.id === id)
    if (founded.isCompleted) {
      setValue(value)
    } else {
      setValue(value - 1)
    }
    setTodos(todos1)
  }
  const selectHandler = (e) => {
    setSelectedOption(e.value)
    filterTodos(e.value)
  }
  const filterTodos = (status) => {
    // console.log(status);
    // if(status==='completed'){
    //   const filtered = todos.filter( todo => todo.isCompleted )
    //   setFilteredTodos(filtered)
    // }else if(status==='uncompleted'){
    //   const filtered = todos.filter( todo => !todo.isCompleted)
    //   setFilteredTodos(filtered)
    // }
    // else{
    //   const filtered = [...todos]
    //   setFilteredTodos(filtered)
    // }
    switch (status) {
      case 'all':
        setFilteredTodos(todos)
        break
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.isCompleted))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  return (
    <>
      <NavBar
        value={value}
        todos={todos}
        selectedOption={selectedOption}
        onSelect ={selectHandler}
      />
      <div className={style.container}>
        <TodoForm submitTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          updateTodo={updateTodo}
          compeleteHandler={compeleteHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </>
  )
}

export default Body

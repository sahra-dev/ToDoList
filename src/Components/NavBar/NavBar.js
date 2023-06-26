import style from './Navbar.module.css'
import Select from 'react-select'

const options = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'uncompleted', label: 'UnCompleted' },
]
const NavBar = (props) => {
  
 

  return (
    <div className={style.Navbar}>
      <span>
        <Select
          className={style.selectCmp}
          defaultValue={props.selectedOption}
          onChange={props.onSelect}
          options={options}
        />
      </span>
      <h1> To Do List !</h1>
      {props.value === 0 ? (
        <p> Set your Today Todos</p>
      ) : (
        <p> Not Completed Todos : {props.value}</p>
      )}
    </div>
  )
}

export default NavBar

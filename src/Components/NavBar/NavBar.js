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
      <h3> To Do List !</h3>
      <div className={style.NavBarOption}>
        <div>
          <Select
            className={style.selectCmp}
            defaultValue={props.selectedOption}
            onChange={props.onSelect}
            options={options}
          />
        </div>
        {props.value === 0 ? (
          <p> Set Todos :)</p>
        ) : (
          <p> Todos : {props.value}</p>
        )}
      </div>
    </div>
  )
}

export default NavBar

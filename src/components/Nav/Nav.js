import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useDispatch} from 'react-redux';
import { toggleFilter } from '../Redux/Toggle';
import './Nav.css'
function Nav() {
  const dispatch = useDispatch()
  //handle toggle for filterss
  function toggle() {
    dispatch(toggleFilter("togglefilter"))
  }
  return (
    <div className='Nav'>
      <p>Myntra</p>
      <p>Home </p>
      <div className='NFC' onClick={toggle}>
        <FontAwesomeIcon icon={faFilter} />
        <p>Filter</p>
      </div>
    </div>
  )
}

export default Nav
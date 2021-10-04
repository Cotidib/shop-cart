import React from 'react'
import { useGlobalContext } from './context'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav>
        <h3>useReducer</h3>
        <div className='nav-container'>
          <div className='cart-icon-container'><AiOutlineShoppingCart className='cart-icon'/><span className='total-items'>3</span></div>
        </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { useGlobalContext } from './context'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  const {amount} = useGlobalContext();

  return (
    <nav>
        <h3>useReducer Demo</h3>
        <div className='nav-container'>
          <div className='cart-icon-container'><AiOutlineShoppingCart className='cart-icon'/><span className='total-items'>{amount}</span></div>
        </div>
    </nav>
  )
}

export default Navbar
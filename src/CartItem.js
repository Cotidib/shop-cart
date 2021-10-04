import React from 'react'
import { useGlobalContext } from './context'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

function CartItem({ id, img, title, price, amount }) {
    return (
        <article className='item-box'>
            <div className='item-container'>
                <img src={img} alt={title}/>
                <div className='item-info-container'>
                    <h4>{title}</h4>
                    <p>$ {price}</p>
                    <button>remove</button>
                </div>
            </div>
            <div className='item-amount-container'>
                <button><MdOutlineKeyboardArrowUp/></button>
                <span className='item-amount'>{amount}</span>
                <button><MdOutlineKeyboardArrowDown/></button>
            </div>
        </article>
    )
}

export default CartItem


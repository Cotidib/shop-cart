import React , {useState} from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

function Cart() {
    const { cart } = useGlobalContext();

    if (cart.length === 0) {
        return (
          <section className='cart'>
            <header>
              <h2>Your Cart</h2>
              <h4 className='empty-cart'>is currently empty</h4>
            </header>
          </section>
        )
      }

    return (
        <section className='cart-container'>
        <h2>Your Cart</h2>
        <div className='cart-list'>
             {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        </div>
        <hr/>
        <div className='total-price-container'>
            <h4>Total</h4>
            <p>tot</p>
        </div>
        </section>
    )
}

export default Cart

import React, { useState, useContext, useReducer, useEffect } from 'react'
// import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState)

  const remove = (id) => {
    dispatch({type: 'REMOVE', payload:id})
  }

  // const increase = (id) => {
  //   dispatch({type:'INCREASE',payload:id})
  // }

  // const decrease = (id) => {
  //   dispatch({type:'DECREASE',payload:id})
  // }

  const toggleAmount = (id,type) => {
    dispatch({type:'TOGGLE_AMOUNT', payload:{id,type}})
  }

  useEffect(()=>{
    dispatch({type:'GET_TOTALS'})
  },[state.cart])

  const fetchData = async () => {
    dispatch({type:'LOADING'});
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type:'DISPLAY', payload:cart})
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <AppContext.Provider
      value={{
        ...state,
        remove,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
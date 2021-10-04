import React from 'react'
import { useGlobalContext } from './context'
import Navbar from './Navbar'
import Cart from './Cart'


function App() {
  const {loading} = useGlobalContext();
   if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  
  return (
    <main>
      <Navbar />
      <Cart />
    </main>
  );
}

export default App;

import React from 'react'
import { useGlobalContext } from './context'
import Navbar from './Navbar'
import Cart from './Cart'

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader"
const override = css`
  display: block;
  margin: 30vh auto;
`;

function App() {
  const {loading} = useGlobalContext();
   if (loading) {
    return (
      <div className='loading'>
        <ClipLoader color='black' loading={loading} css={override} size={150} />
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

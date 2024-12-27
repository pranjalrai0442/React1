import React from 'react'
import Cardmatrix from './cardmatrix'
import { Link,NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
      <Link to="/CardMatrix">
        <img src="pic1.jpg" alt="" />Hello
      </Link>
    </>
  )
}

export default Home
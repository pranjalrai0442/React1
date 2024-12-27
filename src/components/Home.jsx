import React from 'react'
import Cardmatrix from './cardmatrix'
import { Link,NavLink } from 'react-router-dom'
import { compoContext } from '../Context/Context'

function Home() {
  const {Score}=compoContext();
  return (
    <>
      <Link to="/CardMatrix" className='w-1/4 block'>
        <img src="background1.jpg" alt="" className='h-1/8 w-auto rounded-lg mt-6 border-2' />
        </Link>
        
    </>
  )
}

export default Home
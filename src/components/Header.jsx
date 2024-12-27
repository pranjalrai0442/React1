import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { compoContext, UserProvider } from '../Context/Context'
function Header() {
    const {Score} = compoContext()
    const {chance} = compoContext()

    useEffect(()=>{
      console.log(`ScoreUpdated${chance}`)
    },[Score])


  return (
    <>
    <div className='flex justify-between '>
        <NavLink to="/">
                <p className='text-4xl border-solid border-white border-4 text-gray-100 rounded-lg w-full'>Home &nbsp;</p>
        </NavLink>
        <div>
          <p className='text-4xl border-solid text-gray-100 rounded-lg w-full inline'>No of tries left:{chance}</p>
        </div>
        <div>
        <p className='text-4xl border-solid border-white border-4 text-gray-100 rounded-lg w-full'>Score:{Score}</p>
        </div>
    </div>
    </>
  )
}

export default Header




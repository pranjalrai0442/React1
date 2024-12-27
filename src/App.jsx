import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardmatrix from './components/cardmatrix'
import { UserProvider } from './Context/Context'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/Home'
import LuckyMatch from './components/LuckyMatch'

function App() {
  const [Score,setScore] = useState(0)
  const [chance,setchance] = useState(5)

  const changetry=()=>{
    setchance(prev=>prev-1)
  }

  const changeScore=()=>{
    setScore(prev=>prev+10)
  }
  const router = createBrowserRouter([
    {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"Cardmatrix",
        element:<Cardmatrix/>
      },
      {
        path:"LuckyMatch",
        element:<LuckyMatch/>
      }
    ]
   }
   ])
  
   return(
    <UserProvider value={{Score,changeScore,chance,changetry}}>
      <RouterProvider router={router}/>
    </UserProvider>
   )
}

export default App

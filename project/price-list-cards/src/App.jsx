import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav/Nav'
import PriceList from './Components/PriceList/PriceList'
import DashBoard from './Components/DashBoard/DashBoard'
import PhoneBar from './Components/Phone/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav></Nav>
       <PriceList></PriceList>
       <DashBoard></DashBoard>
       <PhoneBar></PhoneBar>
        </div>
   
    </>
  )
}

export default App

import {  useEffect, useState } from 'react'
import './App.css'
import Loader from './pages/Loader/Loader'
import StartGame from './pages/GameStart/StartGame'

function App() {
  const [data,setData] = useState({})
  const [loading,setLoading] = useState(true)
  const getDATA =  async () => {
      const res = await fetch("data.json")
      const data = await res.json()
      setData(data)
      console.log(data)
  }
  console.log(data)
  useEffect(() => {
     getDATA()
     setTimeout(() => {
      setLoading(false)
     },2000)
  },[])


  return (
     <div>
      {loading ? <Loader/> : 
       <div>
      <StartGame/>
       </div>
      }
     </div>
  )
}

export default App

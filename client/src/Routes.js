import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './Pages/Home'
import Solana from './Pages/Solana'
import './App.css'
export default function RoutesPath() {
  const [loading, setLoading] = useState(true)
  const [solana, setSolana] = useState()

  useEffect(() => {
    setLoading(true)
    axios.get(`/api/get-nfts`)
      .then((res) => {
        setSolana(res.data)
        console.log(res.data)
      })
      .catch((err) => console.error(err))
    setLoading(false)
  }, [])


  // const filteredCoins = coins.filter((coin) =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // );

  if (loading) {
    return <div className="loader-container">
      <div className='loader'>
        <span className="let1">l</span>
        <span className="let2">i</span>
        <span className="let3">g</span>
        <span className="let4">h</span>
        <span className="let5">t</span>
        <span className="let4">s</span>
        <span className="let2">_</span>
        <span className="let6">U</span>
        <span className="let7">P</span>
      </div>
    </div>
  }
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/solana' element={<Solana solana={solana} /> } />
    </Routes>
  )
}

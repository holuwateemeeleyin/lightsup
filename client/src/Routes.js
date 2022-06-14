import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './Pages/Home'
import Solana from './Pages/Solana'
import './App.css'
import Loader from './Pages/Loader'
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
    return <Loader/>
  }
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/solana' element={<Solana solana={solana} /> } />
    </Routes>
  )
}

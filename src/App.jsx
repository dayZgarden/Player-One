import { useState } from 'react'
import Home from './pages/Home'
import Nav from './components/nav'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import WishList from './pages/WishList'
import GameDisplay from './components/GameDisplay'
import GameInfo from './pages/GameInfo'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Recommended from './components/Recommended'
import Genre from './pages/Genre'
import { Toaster } from 'react-hot-toast'


function App() {

  return (
    <div>
      <Toaster />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='GameInfo/:id' element={<GameInfo/> }/>
          <Route path='/G' element={<GameDisplay /> }/>
          <Route path='/k' element={<Nav /> }/>
          <Route path='/Wishlist' element={<WishList /> }/>
          <Route path='/genre' element={<Genre/>}/>
        </Routes>
      </Router>

      
    </div>
  )
}

export default App

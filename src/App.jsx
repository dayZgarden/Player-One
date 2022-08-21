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
import Landing from './pages/Landing'
import Genre from './pages/Genre'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'


function App() {
  const [wishlist, setWishlist] = useState([])

  const addToWishlist = (game) => {
    const gameExists = wishlist.find((item) => item.id === game.id)
    if(gameExists){
      setWishlist(wishlist.map((item) => item.id === game.id ? {...gameExists, quantity: gameExists.quantity + 1} : item))
    }
    else{
      setWishlist([...wishlist, {...game, quantity: 1} ])
    }
    const refreshToast = toast.loading('Adding...')
    setTimeout(() => {
      toast.success('Added to Wishlist', {
        id: refreshToast
      })
    }, 1000)
  }

  const handleRemoveGame = (game) => {
    const gameExists = wishlist.find((item) => item.id === game.id)
    if(gameExists.quantity === 1){
      setWishlist(wishlist.filter((item) => item.id !== game.id))
    }
    else{
      setWishlist(wishlist.map((item) => item.id === game.id ? {...gameExists, quantity: gameExists.quantity - 1} : item))
    }
  }

  return (
    <div>
      <Toaster />
      <Router>
        <Routes>
          <Route path='/games'  element={<Home wishlist={wishlist} addToWishlist={addToWishlist}/>}/>
          {/* <Route path='/wishlist' element={<WishList wishlist={wishlist} setWishlist={setWishlist}/>}/> */}
          
          <Route path='GameInfo/:id' element={<GameInfo/> }/>

          <Route path='/' element={<Landing /> }/>

          <Route path='/Wishlist' element={<WishList wishlist={wishlist} addToWishlist={addToWishlist} handleRemoveGame={handleRemoveGame} /> }/>

          <Route path='/genre' element={<Genre/>}/>

        </Routes>
      </Router>

      
    </div>
  )
}

export default App

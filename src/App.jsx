import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'


function App() {



  return (
    <div>
      <Toaster />
      <Router>
        <AnimatedRoutes />
      </Router>

      
    </div>
  )
}

export default App

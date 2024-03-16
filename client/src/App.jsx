import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Editor from './Pages/Editor/Editor'
import LandingPage from './Pages/LandingPage/LandingPage'

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
   </Router>
  )
}

export default App

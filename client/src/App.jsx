import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome/>}/>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
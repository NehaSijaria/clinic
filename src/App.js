
import React from 'react'
import { Route, BrowserRouter  as Router} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Navber'
import Home from './components/Home/Home'

export default function App() {
  return (
    <div>
      <Router className="App">
      <Route exact path="/" component={Home} />
      </Router>
     <Nav />
     
    </div>
  )
}




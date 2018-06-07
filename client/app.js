import React from 'react'
import {Navbar, Sidebar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <Routes />
    </div>
  )
}

export default App

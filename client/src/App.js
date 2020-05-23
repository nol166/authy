import React from 'react'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path="/" component={Landing} />
            </div>
        </Router>
    )
}

export default App

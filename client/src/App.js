import React from 'react'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path="/" component={Landing} />
                <Route path="/register" component={Register} />
                {/* <Route path="/login" component={Login} /> */}
            </div>
        </Router>
    )
}

export default App

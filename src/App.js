import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Login from './views/users/Login'

const App = () => {
    return(
        <Router>
            <Navbar/>
            <Route path="/login" component={Login}/>
        </Router>
    )
}

export default App
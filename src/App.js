import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Login from './views/users/Login'
import Registration from './views/users/Registration'

const App = () => {
    return(
        <Router>
            <Navbar/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Registration}/>
        </Router>
    )
}

export default App
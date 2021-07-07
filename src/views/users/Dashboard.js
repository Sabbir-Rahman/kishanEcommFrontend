import React from 'react'
import Navbar from '../../Components/Navbar/NavbarDash/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Footer from '../../Components/Footer/Footer'

const Dashboard = () => {
    return(
        <div>
            <Navbar />
            <Sidebar/>
            <Footer />
        </div>
    )
}

export default Dashboard
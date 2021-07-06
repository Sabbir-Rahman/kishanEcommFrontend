import React from 'react'
import Navbar from '../../Components/Navbar/NavbarDash/Navbar'
import Sidebar from '../../Components/Sidebar/SidebarDash/Sidebar'

const Dashboard = () => {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default Dashboard
import React, { Component } from "react"
import Navbar from 'components/Navbars/TrialNavbar'
import sidebarImage from 'assets/img/sidebar-3.jpg'
import routes from "routes/dashboardRoutes.js"
function Trial() {
    const [color, setColor] = React.useState("black")
    const [hasImage, setHasImage] = React.useState(true)
    const [image, setImage] = React.useState(sidebarImage)

    return (
        <div style={{ backgroundColor: "#F4FFEE" }}>
            <Navbar routes={routes} />
        </div>
    );
}

export default Trial
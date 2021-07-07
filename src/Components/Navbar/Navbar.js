import React from 'react'
import {Menu} from 'semantic-ui-react'

export default function Navbar() {
    return(
    <Menu className="ui green secondary pointing menu">
        <Menu.Item
            className="item"
            href="/"
            active={'/' === window.location.pathname}
        >
            মূল পাতা
        </Menu.Item>
        <Menu.Item
            className="item"
            href="/krishiBazar"
            active={('/krishiBazar' === window.location.pathname)
        }>
            কৃষি বাজার
        </Menu.Item>
        <Menu.Item
            className="item"
            href="/krishiForum" 
            active={('/krishiForum' === window.location.pathname)}
        >
            কৃষি ফোরাম
        </Menu.Item>
        <Menu.Item
            className="item"
            href="/fosholerDoctor" 
            active={('/fosholerDoctor' === window.location.pathname)}
        >
            ফসলের ডাক্তার
        </Menu.Item>
        <Menu.Item
            className="item"
            href="/about" 
            active={('/about' === window.location.pathname)}
        >
            আমাদের সম্পর্কে
        </Menu.Item>
        <Menu.Item
            className="item right menu"
            href="/register" 
            active={('/register' === window.location.pathname)}
        >
            যোগ দিন
        </Menu.Item>
        <Menu.Item
            className="item menu"
            href="/login" 
            active={'/login' === window.location.pathname}
        >
            লগ ইন
        </Menu.Item>
    </Menu>
    )
}
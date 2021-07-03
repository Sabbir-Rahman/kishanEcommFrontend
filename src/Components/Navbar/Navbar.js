import React from 'react'
import {Menu} from 'semantic-ui-react'

export default function Navbar() {
    return(
    // <div class="ui green secondary pointing menu">
    //     <a class="item" href="/">মূল পাতা</a>
    //     <a class="item" href="/krishiBazar">কৃষি বাজার</a>
    //     <a class="item" href="/krishiForum">কৃষি ফোরাম</a>
    //     <a class="item" href="/fosholerDoctor">ফসলের ডাক্তার</a>
    //     <a class="item" href="/about">আমাদের সম্পর্কে</a>
    //     <div class="right menu">
    //         <a class="ui item" href="/register">যোগ দিন</a>
    //         <a class="ui item"href="/login">লগ ইন</a>
    //     </div>
    // </div>
    <Menu className="ui green secondary pointing menu">
        <Menu.Item className="item" href="/">মূল পাতা</Menu.Item>
        <Menu.Item className="item" href="/krishiBazar">কৃষি বাজার</Menu.Item>
        <Menu.Item className="item" href="/krishiForum">কৃষি ফোরাম</Menu.Item>
        <Menu.Item className="item" href="/fosholerDoctor">ফসলের ডাক্তার</Menu.Item>
        <Menu.Item className="item" href="/about">আমাদের সম্পর্কে</Menu.Item>
        <Menu.Item className="item right menu" href="/register">যোগ দিন</Menu.Item>
        <Menu.Item className="item menu" href="/login">লগ ইন</Menu.Item>
    </Menu>
    )
}
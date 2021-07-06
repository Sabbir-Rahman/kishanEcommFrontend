import React from 'react'
import {Button} from 'semantic-ui-react'
import "./style.css";

export default function Navbar(){
    return (
        <div class='ui top menu' className='navbar'>
            <div class='item'>
                <h1>প্রোফাইল</h1>
            </div>
            <div class="item">
                <a class='item'>ইউজারনেম</a>
            </div>
            <div class="right menu">
                <Button color="green" fluid size="tiny">প্রোডাক্ট যোগ করুন</Button>
            </div>
        </div>
    )
}
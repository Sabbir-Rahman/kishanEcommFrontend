import React from 'react'
import {Button} from 'semantic-ui-react'

export default function Navbar(){
    return (
        <div class='ui top fixed menu'>
            <div class='item'>
                <h1>প্রোফাইল</h1><br/>
            </div>
            <div class="right menu">
                <Button color="green" fluid size="tiny">প্রোডাক্ট যোগ করুন</Button>
                <a class='item right'>My name is Shila</a>
            </div>
        </div>
    )
}
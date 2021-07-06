import React from 'react'
import {Button} from 'semantic-ui-react'

export default function Sidebar(){
    return (
        <div class='ui vertical menu'>
            <a class="active teal item">
                Inbox
                <div class="ui teal left pointing label">1</div>
            </a>
            <a class="item">
                Spam
                <div class="ui label">51</div>
            </a>
            <a class="item">
                Updates
                <div class="ui label">1</div>
            </a>
        </div>
    )
}
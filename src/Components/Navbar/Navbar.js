import React from 'react';

export default function Navbar() {

    return(
    <div class="ui green secondary pointing menu">
        <a class="active item" href="/">মূল পাতা</a>
        <a class="item" href="/krishiBazar">কৃষি বাজার</a>
        <a class="item" href="/krishiForum">কৃষি ফোরাম</a>
        <a class="item" href="/fosholerDoctor">ফসলের ডাক্তার</a>
        <a class="item" href="/about">আমাদের সম্পর্কে</a>
        <div class="right menu">
            <a class="ui item" href="/register">যোগ দিন</a>
            <a class="ui item"href="/login">লগ ইন</a>
        </div>
    </div>
    )
}
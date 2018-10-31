import React from 'react'

import Banner from '../components/banner.js'

import Graph from '../images/sample.png'

export const Caption = () => (
    <div class="caption">
        <Banner bannerText = "Augue ut lectus" />
        <div class= "grid-container">
            <div class= "grid-x">
                <h3 class="cell small-12 heading">Aenean euismod elementum nisi quis eleifend</h3>
                <img src= {Graph} alt= "graph"/>
                <p class="cell small-12 text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor consequat id porta. Velit scelerisque in dictum non consectetur.</p>
            </div>
        </div>
    </div>
)
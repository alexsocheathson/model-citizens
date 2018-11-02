import React from 'react'

import Banner from '../components/banner.js'

import Graph from '../images/sample.png'

export const Detail = () => (
    <div class= "detail">
        <Banner bannerText = "Augue ut lectus" />
        <div class= "grid-container">
            <div class= "grid-x">
                <h3 class= "cell small-12 heading">Aenean euismod elementum nisi quis eleifend</h3>
                {/* <img src= {Graph} alt= "graph" /> */}
                <div class="cell small-12">
                    <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~son3/7.embed"></iframe>
                </div>
                <ul class= "cell small-12 bullets">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. At consectetur lorem donec massa sapien faucibus. Eros in cursus turpis massa tincidunt dui ut ornare lectus.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis. Proin nibh nisl condimentum id.</li>
                </ul>
            </div>
        </div>
    </div>
)
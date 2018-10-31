import React from 'react'

import Banner from '../components/banner.js'
import BlockText from '../components/blocktext.js'

import Graph from '../images/sample.png'

export const Mega = () => (
    <div class= "mega">
    <Banner bannerText= "Augue ut lectus" />
        <div class= "grid-container">
            <div class= "grid-x">
                <p class= "cell small-12 heading">Aenean euismod elementum nisi quis eleifend</p>
                <img class= "cell small-12" src= {Graph} alt= "graph" />
                <BlockText title= "consequat semper viverra nam libero" subtext= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna. Commodo ullamcorper a lacus vestibulum sed arcu non. Tellus cras adipiscing enim eu turpis. Sed augue lacus viverra vitae. Ultricies mi quis hendrerit dolor magna eget est lorem. Metus vulputate eu scelerisque felis. Libero nunc consequat interdum varius sit." />
                <BlockText title= "consequat semper viverra nam libero" subtext= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna. Commodo ullamcorper a lacus vestibulum sed arcu non. Tellus cras adipiscing enim eu turpis. Sed augue lacus viverra vitae. Ultricies mi quis hendrerit dolor magna eget est lorem. Metus vulputate eu scelerisque felis. Libero nunc consequat interdum varius sit."/>
                <p class= "cell small-12 text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna. Commodo ullamcorper a lacus vestibulum sed arcu non. Tellus cras adipiscing enim eu turpis. Sed augue lacus viverra vitae. Ultricies mi quis hendrerit dolor magna eget est lorem. Metus vulputate eu scelerisque felis. Libero nunc consequat interdum varius sit.</p>
            </div>
        </div>
    </div>
)